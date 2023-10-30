  const pokemonName = document.querySelector(".pokemon-name");
  const pokemonSprite = document.querySelector(".pokemon-sprite");
  const pokemonId = document.querySelector(".id");
  const button = document.querySelector(".btn-input");
  const input = document.querySelector(".input")

  //Consumindo a Api
  const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = APIResponse.json();
    return data;
  }

  //Renderizando os pokemons
  const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon.toLowerCase());

    pokemonName.innerHTML = data.name.toUpperCase();
    pokemonSprite.src = data.sprites.other["official-artwork"].front_default;
    pokemonId.innerHTML = data.id;
    console.log(data);
  }  
  renderPokemon("1")

  button.addEventListener("click", (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
  })

  