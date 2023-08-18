function loadDiv() {
  let div = document.getElementById("my-div");
  let btn = document.getElementById("load-btn");

  div.innerHTML = `<h1>Olá, mundo!</h1>`;

  btn.innerHTML = "Descarregar";
}

function unloadDiv() {
  let div = document.getElementById("my-div");
  div.innerHTML = "";

  let btn = document.getElementById("load-btn");
  btn.innerHTML = "Carregar";
}

function changeDivState() {
  let btn = document.getElementById("load-btn");

  if (btn.innerHTML === "Carregar") {
    loadDiv();
  } else {
    unloadDiv();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("load-btn");
  btn.addEventListener("click", changeDivState);
});
