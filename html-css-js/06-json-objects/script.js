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

const loadDiv = () => {
  const tableHtml = `
  <table id="drinks">
    <thead>
      <tr>
        <th>Cervejas</th>
        <th>Teor Alcoólico</th>
        <th>Estilo</th>
        <th>IBU</th>
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

  myDiv.innerHTML = tableHtml;
  sortBtnDiv.innerHTML = `<a id="sort-btn">Ordenar</a>`;
  randBtnDiv.innerHTML = `<a id="rand-btn">Embaralhar</a>`;

  loadBtn.innerHTML = "Alterar";
};

const unloadDiv = () => {
  sortBtnDiv.innerHTML = ``;
  randBtnDiv.innerHTML = ``;

  myDiv.innerHTML = "<h1>Cervejas!</h1>";

  loadBtn.innerHTML = "Carregar";
};

const changeDivState = () => {
  unfade(myDiv);

  if (loadBtn.innerHTML == "Carregar") {
    loadDiv();
  } else {
    unloadDiv();
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
  btn.addEventListener("click", changeDivState);
});

document.addEventListener("click", function (event) {
  if (event.target.id === "sort-btn") {
    beers.sort((a, b) => a.name.localeCompare(b.name));

    loadDiv();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.id === "rand-btn") {
    beers.sort(() => Math.random() - 0.5);

    loadDiv();
  }
});
