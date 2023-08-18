function loadDiv() {
  let div = document.getElementById("my-div");
  let btn = document.getElementById("load-btn");

  div.innerHTML = `<h1>Olá, mundo!</h1>`;

  btn.innerHTML = "Alterar";
}

function unloadDiv() {
  let div = document.getElementById("my-div");

  div.innerHTML = "<h1>Cervejas!</h1>";

  let btn = document.getElementById("load-btn");
  btn.innerHTML = "Carregar";
}

function changeDivState() {
  let btn = document.getElementById("load-btn");

  unfade(document.getElementById("my-div"));

  if (btn.innerHTML === "Carregar") {
    loadDiv();
  } else {
    unloadDiv();
  }
}

function fade(element) {
  var op = 1;

  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);

      element.style.display = "none";
    }

    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";

    op -= op * 0.1;
  }, 50);
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
