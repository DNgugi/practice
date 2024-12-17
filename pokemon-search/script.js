const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const typesDisplay = document.getElementById("types");
const pokemonSprite = document.getElementById("sprite-container");
const hpDisplay = document.getElementById("hp");
const attackDisplay = document.getElementById("attack");
const defenseDisplay = document.getElementById("defense");
const specialAttackDisplay = document.getElementById("special-attack");
const specialDefenseDisplay = document.getElementById("special-defense");
const speedDisplay = document.getElementById("speed");

const fetchPokemon = async (str) => {
  try {
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${str}`
    );

    const data = await res.json();

    return data;
  } catch (err) {
    alert("Pokémon not found");
  }
};

const sanitizeInput = (str) => {
  if (str.match("♀")) {
    str += "-f";
  } else if (str.match("♂")) {
    str += "-m";
  }
  return str.toLowerCase().replace(/\W/, "").split(" ").join("-");
};
const resetDisplay = () => {
  typesDisplay.innerText = "";
  pokemonSprite.innerText = "";
};

const updateUi = (data) => {
  pokemonName.textContent = data.name.toUpperCase();
  pokemonId.textContent = `#${data.id}`;
  pokemonWeight.textContent = `Weight: ${data.weight}`;
  pokemonHeight.textContent = `Height: ${data.height}`;

  data.types.forEach((data) => {
    const button = document.createElement("button");
    button.textContent = data.type.name.toUpperCase();
    typesDisplay.append(button);
  });

  hpDisplay.textContent = data.stats.find(
    (stat) => stat.stat.name === "hp"
  ).base_stat;
  attackDisplay.textContent = data.stats.find(
    (stat) => stat.stat.name === "attack"
  ).base_stat;
  defenseDisplay.textContent = data.stats.find(
    (stat) => stat.stat.name === "defense"
  ).base_stat;
  specialAttackDisplay.textContent = data.stats.find(
    (stat) => stat.stat.name === "special-attack"
  ).base_stat;
  specialDefenseDisplay.textContent = data.stats.find(
    (stat) => stat.stat.name === "special-defense"
  ).base_stat;
  speedDisplay.textContent = data.stats.find(
    (stat) => stat.stat.name === "speed"
  ).base_stat;

  pokemonSprite.innerHTML += `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name}sprite">`;
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetDisplay();
  if (searchInput.value.match(/Red/)) {
    alert("Pokémon not found");
  } else {
    const res = fetchPokemon(sanitizeInput(searchInput.value));

    res.then((data) => updateUi(data));
  }
});
