const beerColumns = {
  name: "Nome",
  alcohol: "Teor Alcoólico",
  style: "Estilo",
  ibu: "IBU",
};

const foodColumns = {
  dish: "Prato",
  description: "Descrição",
  ingredient: "Ingrediente Principal",
  measurement: "Serve",
};

const dessertColumns = {
  variety: "Nome",
  topping: "Cobertura",
  flavor: "Sabor",
};

const dataColumnsTypes = [beerColumns, foodColumns, dessertColumns];

let beers = [];
let foods = [];
let desserts = [];

let myDiv = document.getElementById("my-div");
let loadBtn = document.getElementById("load-btn");
let sortBtnDiv = document.getElementById("sort-btn-div");
let randBtnDiv = document.getElementById("rand-btn-div");

let myDivId = "my-div";
let currentIndex = 0;

async function loadBeers() {
  try {
    let res = await fetch("https://random-data-api.com/api/v2/beers?size=3");

    beers = await res.json();

    showDataDiv(beers, beerColumns);
  } catch {
    myDiv.innerHTML = "<h1>Deu bode! Melhor ir tomar cerveja...</h1>";
  }
}

async function loadFoods() {
  try {
    let res = await fetch(
      "https://random-data-api.com/api/food/random_food?size=3"
    );

    foods = await res.json();

    showDataDiv(foods, foodColumns);
  } catch {
    myDiv.innerHTML = "<h1>Deu bode! Melhor ir tomar cerveja...</h1>";
  }
}

async function loadDesserts() {
  try {
    let res = await fetch(
      "https://random-data-api.com/api/dessert/random_dessert?size=3"
    );

    desserts = await res.json();

    showDataDiv(desserts, dessertColumns);
  } catch {
    myDiv.innerHTML = "<h1>Deu bode! Melhor ir tomar cerveja...</h1>";
  }
}

const showDataDiv = (
  data,
  columnNames = dataColumnsTypes[currentIndex],
  targetId = "my-div"
) => {
  const tableHtml = `
  <table id="drinks">
    <thead>
      <tr>
        ${Object.values(columnNames)
          .map((columnName) => `<th>${columnName}</th>`)
          .join("")}
      </tr>
    </thead>
    <tbody>
      ${data
        .map(
          (item) => `
        <tr>
          ${Object.keys(columnNames)
            .map((columnName) => `<td>${item[columnName]}</td>`)
            .join("")}
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>
`;

  const targetDiv = document.getElementById(targetId);

  if (targetDiv) {
    targetDiv.innerHTML = tableHtml;
  }

  sortBtnDiv.innerHTML = `<a id="sort-btn">Ordenar</a>`;
  randBtnDiv.innerHTML = `<a id="rand-btn">Embaralhar</a>`;

  loadBtn.innerHTML = "Alterar tabela";
};

const changeDivState = (targetDivId) => {
  unfade(document.getElementById(targetDivId));

  if (loadBtn.innerHTML === "Clique aqui para carregar as tabelas") {
    loadBeers();
  }

  if (loadBtn.innerHTML === "Alterar tabela") {
    currentIndex++;

    if (currentIndex === 1) {
      loadFoods();
    } else if (currentIndex === 2) {
      loadDesserts();
    } else if (currentIndex === 3) {
      loadBeers();
      currentIndex = 0;
    }
  }
};

const unfade = (element) => {
  var op = 0.1;

  element.style.display = "block";

  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }

    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";

    op += op * 0.1;
  }, 20);
};

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("load-btn");
  btn.addEventListener("click", () => changeDivState(myDivId));
});

document.addEventListener("click", function (event) {
  const sortingOptions = {
    "sort-btn": (array, key) =>
      array.sort((a, b) => a[key].localeCompare(b[key])),
    "rand-btn": (array) => array.sort(() => Math.random() - 0.5),
  };

  if (Object.keys(sortingOptions).includes(event.target.id)) {
    const sortingFunction = sortingOptions[event.target.id];

    if (sortingFunction) {
      let sortedData;

      if (currentIndex === 0) sortedData = sortingFunction(beers, "name");
      else if (currentIndex === 1) sortedData = sortingFunction(foods, "dish");
      else if (currentIndex === 2)
        sortedData = sortingFunction(desserts, "variety");

      showDataDiv(sortedData);
    }
  }
});
