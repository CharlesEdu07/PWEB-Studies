let beers = ["Guiness", "Desperados", "Becks"];

let myDiv = document.getElementById("my-div");
let sortBtnDiv = document.getElementById("sort-btn-div");
let loadBtn = document.getElementById("load-btn");
let randBtnDiv = document.getElementById("rand-btn-div");

function loadDiv() {
  let tableHtml = `<table id="drinks"><thead><tr><th>Cervejas</th></tr></thead><tbody>`;
  beers.forEach((beer) => {
    tableHtml += `<tr><td>${beer}</td></tr>`;
  });
  tableHtml += `</tbody></table>`;

  myDiv.innerHTML = tableHtml;
  sortBtnDiv.innerHTML = `<button id="sort-btn">Ordenar</button>`;
  randBtnDiv.innerHTML = `<button id="rand-btn">Aleatório</button>`;

  loadBtn.innerHTML = "Alterar";
}

function unloadDiv() {
  sortBtnDiv.innerHTML = ``;
  randBtnDiv.innerHTML = ``;

  myDiv.innerHTML = "<h1>Cervejas!</h1>";

  loadBtn.innerHTML = "Carregar";
}

function changeDivState() {
  unfade(myDiv);

  if (loadBtn.innerHTML == "Carregar") {
    loadDiv();
  } else {
    unloadDiv();
  }
}

function unfade(element) {
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
}

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("load-btn");
  btn.addEventListener("click", changeDivState);
});

document.addEventListener("click", function (event) {
  if (event.target.id === "sort-btn") {
    beers.sort();
    loadDiv();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.id === "rand-btn") {
    beers.sort(() => Math.random() - 0.5);
    loadDiv();
  }
});
