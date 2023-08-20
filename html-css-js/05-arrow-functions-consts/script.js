let global_objects = ["Sorvete", "Chocolate", "Pudim"];

let myDiv = document.getElementById("my-div");
let sortBtnDiv = document.getElementById("sort-btn-div");
let loadBtn = document.getElementById("load-btn");
let randBtnDiv = document.getElementById("rand-btn-div");

const loadDiv = (objects) => {
  const tableHtml = `
  <table id="drinks">
    <thead>
      <tr>
        <th>Cervejas</th>
      </tr>
    </thead>
    <tbody>
      ${objects.map((obj) => `<tr><td>${obj}</td></tr>`).join("")}
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
    loadDiv(["Sorvete", "Chocolate", "Pudim"]);
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
    const sortedBeers = global_objects.slice().sort();

    loadDiv(sortedBeers);
  }
});

document.addEventListener("click", function (event) {
  if (event.target.id === "rand-btn") {
    const randomBeers = global_objects.slice().sort(() => Math.random() - 0.5);

    loadDiv(randomBeers);
  }
});
