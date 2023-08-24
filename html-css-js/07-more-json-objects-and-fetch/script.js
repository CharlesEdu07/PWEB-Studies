let beers = [];
let foods = [];
let desserts = [];

let myDiv = document.getElementById("my-div");
let sortBtnDiv = document.getElementById("sort-btn-div");
let loadBtn = document.getElementById("load-btn");
let randBtnDiv = document.getElementById("rand-btn-div");

let myDivId = "my-div";
let counter = 0;

async function loadBeers() {
  try {
    let res = await fetch("https://random-data-api.com/api/v2/beers?size=3");

    beers = await res.json();

    showBeerDiv(beers);
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

    showFoodDiv(foods, myDivId);
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

    showDessertDiv(desserts, myDivId);
  } catch {
    myDiv.innerHTML = "<h1>Deu bode! Melhor ir tomar cerveja...</h1>";
  }
}

const showBeerDiv = (beers, targetId = "my-div", columnNames = {}) => {
  const defaultColumnNames = {
    name: "Nome",
    alcohol: "Teor Alcoólico",
    style: "Estilo",
    ibu: "IBU",
  };

  const mergedColumnNames = { ...defaultColumnNames, ...columnNames };

  const tableHtml = `
  <table id="drinks">
    <thead>
      <tr>
        <th>${mergedColumnNames.name}</th>
        <th>${mergedColumnNames.alcohol}</th>
        <th>${mergedColumnNames.style}</th>
        <th>${mergedColumnNames.ibu}</th>
      </tr>
    </thead>
    <tbody>
      ${beers
        .map(
          (beer) =>
            `<tr><td>${beer["name"]}</td><td>${beer["alcohol"]}</td><td>${beer["style"]}</td><td>${beer["ibu"]}</td></tr>`
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

const showFoodDiv = (foods, targetId = "my-div", columnNames = {}) => {
  const defaultColumnNames = {
    dish: "Prato",
    description: "Descrição",
    ingredient: "Ingrediente Principal",
    measurement: "Serve (pessoas)",
  };

  const mergedColumnNames = { ...defaultColumnNames, ...columnNames };

  const tableHtml = `
  <table id="drinks">
    <thead>
      <tr>
        <th>${mergedColumnNames.dish}</th>
        <th>${mergedColumnNames.description}</th>
        <th>${mergedColumnNames.ingredient}</th>
        <th>${mergedColumnNames.measurement}</th>
      </tr>
    </thead>
    <tbody>
      ${foods
        .map(
          (food) =>
            `<tr><td>${food["dish"]}</td><td>${food["description"]}</td><td>${food["ingredient"]}</td><td>${food["measurement"]}</td></tr>`
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

const showDessertDiv = (desserts, targetId = "my-div", columnNames = {}) => {
  const defaultColumnNames = {
    variety: "Nome",
    topping: "Cobertura",
    flavor: "Sabor",
  };

  const mergedColumnNames = { ...defaultColumnNames, ...columnNames };

  const tableHtml = `
  <table id="drinks">
    <thead>
      <tr>
        <th>${mergedColumnNames.variety}</th>
        <th>${mergedColumnNames.topping}</th>
        <th>${mergedColumnNames.flavor}</th>
      </tr>
    </thead>
    <tbody>
      ${desserts
        .map(
          (dessert) =>
            `<tr><td>${dessert["variety"]}</td><td>${dessert["topping"]}</td><td>${dessert["flavor"]}</td></tr>`
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

const changeDivState = (targetDivId, elementsToUnfade) => {
  unfade(document.getElementById(targetDivId));

  if (loadBtn.innerHTML === "Clique aqui para carregar as tabelas") {
    loadBeers();
  }

  if (loadBtn.innerHTML === "Alterar tabela") {
    counter++;

    if (counter === 1) {
      loadFoods();
    } else if (counter === 2) {
      loadDesserts();
    } else if (counter === 3) {
      loadBeers();
      counter = 0;
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
  btn.addEventListener("click", () =>
    changeDivState(myDivId, [sortBtnDiv, randBtnDiv])
  );
});

document.addEventListener("click", function (event) {
  if (event.target.id === "sort-btn") {
    if (counter === 0) {
      let sortedBeers = beers.sort((a, b) => a.name.localeCompare(b.name));

      showBeerDiv(sortedBeers);
    } else if (counter === 1) {
      let sortedFoods = foods.sort((a, b) => a.dish.localeCompare(b.dish));

      showFoodDiv(sortedFoods);
    } else if (counter === 2) {
      let sortedDesserts = desserts.sort((a, b) =>
        a.variety.localeCompare(b.variety)
      );

      showDessertDiv(sortedDesserts);
    }
  }
});

document.addEventListener("click", function (event) {
  if (event.target.id === "rand-btn") {
    if (counter === 0) {
      let sortedBeers = beers.sort(() => Math.random() - 0.5);

      showBeerDiv(sortedBeers);
    } else if (counter === 1) {
      let sortedFoods = foods.sort(() => Math.random() - 0.5);

      showFoodDiv(sortedFoods);
    } else if (counter === 2) {
      let sortedDesserts = desserts.sort(() => Math.random() - 0.5);

      showDessertDiv(sortedDesserts);
    }
  }
});
