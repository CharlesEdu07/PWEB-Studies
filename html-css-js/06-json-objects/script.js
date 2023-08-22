let beers = [
  {
    name: "Guiness",
    alcohol: "10%",
    style: "Stout",
    ibu: 45,
  },
  {
    name: "Desperados",
    alcohol: "6%",
    style: "Lager",
    ibu: 15,
  },
  {
    name: "Becks",
    alcohol: "5%",
    style: "Pilsner",
    ibu: 25,
  },
];

let myDiv = document.getElementById("my-div");
let sortBtnDiv = document.getElementById("sort-btn-div");
let loadBtn = document.getElementById("load-btn");
let randBtnDiv = document.getElementById("rand-btn-div");

let customDivId = "my-custom-div";

let customBeersObject = {
  name: "Nome da Cerveja",
  ibu: "Grau de Amargor",
};

const loadDiv = (targetId = "my-div", columnNames = {}) => {
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

  loadBtn.innerHTML = "Alterar";
};

// const unloadDiv = () => {
//   sortBtnDiv.innerHTML = ``;
//   randBtnDiv.innerHTML = ``;

//   myDiv.innerHTML = "<h1>Cervejas!</h1>";

//   loadBtn.innerHTML = "Carregar";
// };

const unloadDiv = (targetId = "my-div", additionalElements = []) => {
  if (additionalElements.length > 0) {
    additionalElements.forEach((element) => {
      element.innerHTML = ``;
    });
  } else {
    sortBtnDiv.innerHTML = ``;
    randBtnDiv.innerHTML = ``;
  }

  const targetDiv = document.getElementById(targetId);

  if (targetDiv) {
    targetDiv.innerHTML = "<h1>Cervejas!</h1>";
  }

  loadBtn.innerHTML = "Carregar";
}

const changeDivState = (targetDivId, elementsToUnfade) => {
  unfade(document.getElementById(targetDivId));

  if (loadBtn.innerHTML === "Carregar") {
    loadDiv(targetDivId, customBeersObject);
  } else {
    unloadDiv(targetDivId, elementsToUnfade);
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
  btn.addEventListener("click", () => changeDivState(customDivId, [sortBtnDiv, randBtnDiv]));
});

document.addEventListener("click", function (event) {
  if (event.target.id === "sort-btn") {
    beers.sort((a, b) => a.name.localeCompare(b.name));

    //loadDiv();
    loadDiv(customDivId, customBeersObject);
  }
});

document.addEventListener("click", function (event) {
  if (event.target.id === "rand-btn") {
    beers.sort(() => Math.random() - 0.5);

    //loadDiv();
    loadDiv(customDivId, customBeersObject);
  }
});
