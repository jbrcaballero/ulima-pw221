const main = _ => {
  let buttonShow = document.getElementById("btnShow");
  buttonShow.addEventListener("click", showInfo);
}
window.addEventListener("load", main);
//Ejemplo: https://pokeapi.co/api/v2/pokemon/pikachu
const showInfo = _ => {
  let pokemonName = document.getElementById("txtPokemonName").value;
  console.log(pokemonName);
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;  
  console.log(url);
  getJson(url);
  
}

const getJson = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("divPokemon").classList.remove("d-none");
        document.getElementById("lblName").innerText = data.name;
        document.getElementById("lblWeight").innerText = data.weight;
        document.getElementById("imgPokemon").src = data.sprites.front_default;
        skillsSpan= document.getElementById("lblSkills");
        textSpan = "";
        data.abilities.forEach(element => {
          textSpan += element.ability.name + "\n";
        });
        skillsSpan.innerText = textSpan;
    });
}
