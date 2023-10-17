# Desafio-Pokemon-API
![Screenshot](https://i.imgur.com/FWQpm48.png)<br>
<a href="https://desafio-pokemon-api.vercel.app/">Link do Projeto</a><br><br>
Aplicativo de Informações sobre Pokémon
Este repositório contém um código JavaScript que busca e exibe informações sobre um Pokémon usando a PokeAPI. O código tem finalidades educacionais e fornece um exemplo básico do uso de JavaScript assíncrono (async/await) para buscar dados de uma API externa e atualizar dinamicamente a página da web.

Componentes do Código<br><br>
<b>1. Elementos HTML</b>
O código interage com vários elementos HTML, selecionando-os com document.querySelector() para manipular seu conteúdo. Aqui estão os elementos selecionados:

pokemonName: Exibe o nome do Pokémon.
pokemonSprite: Exibe a imagem oficial do Pokémon.
pokemonId: Exibe o ID do Pokémon.
button: Um botão para acionar a recuperação de dados.
input: Uma caixa de entrada onde o usuário pode inserir o ID do Pokémon.

<b>2. Buscando Dados do Pokémon</b>
A função fetchPokemon é uma função assíncrona que usa o método fetch() para solicitar dados da PokeAPI. Ela recebe um parâmetro pokemon que representa o ID do Pokémon e constrói a URL da API para buscar os dados desse Pokémon específico. Os dados são então convertidos em um objeto JavaScript usando APIResponse.json() e retornados.

<b>3. Renderizando Dados do Pokémon</b>
A função renderPokemon é uma função assíncrona que exibe os dados de um Pokémon específico na página da web. Ela recebe um parâmetro pokemon, busca os dados usando fetchPokemon e atualiza os elementos HTML com os dados recebidos:

pokemonName exibe o nome do Pokémon em letras maiúsculas.
pokemonSprite exibe a imagem oficial do Pokémon.
pokemonId exibe o ID do Pokémon.
Os dados são registrados no console para fins de depuração.

<b>4. Manipulação de Eventos</b>
O código adiciona um ouvinte de eventos ao elemento button para um evento de clique. Quando o botão é clicado, a função renderPokemon é chamada com o valor inserido no campo input, que representa o ID do Pokémon. O comportamento padrão do evento é impedido para evitar o envio de formulário.
