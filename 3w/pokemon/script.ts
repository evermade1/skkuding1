const tmp = window.localStorage.getItem("pokemon")
const pokemon = JSON.parse(tmp ? tmp : '');
console.log(pokemon);

const main = document.querySelector("main");

const subdetail = document.createElement("div");
subdetail.classList.add("subdetail");
const img = document.createElement("img");
img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
img.alt = pokemon.name;
subdetail.appendChild(img);
const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody);

Object.keys(pokemon).forEach((key) => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerText = key;
  const tdValue = document.createElement("td");
  tdValue.innerText = pokemon[key];
  tr.append(td, tdValue);
  tbody.appendChild(tr);
});
main && main.append(subdetail, table);