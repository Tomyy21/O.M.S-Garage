var menu_toggle = document.querySelector(".menu_toggle");
var menu = document.querySelector(".menu");
var menu_toggle_span = document.querySelector(".menu_toggle span");

menu_toggle.onclick = function () {
  menu_toggle.classList.toggle("active");
  menu_toggle_span.classList.toggle("active");
  menu.classList.toggle("responsive");
};

// -------------------------------

let LirePlus1 = document.querySelector(".read_more1");
let LirePlus2 = document.querySelector(".read_more2");
let LirePlus3 = document.querySelector(".read_more3");
const service = document.querySelector(".service");
const depannage = document.querySelector(".depannage");
const textdepannage = document.querySelector(".textdepannage");
const textdepannagelong = document.querySelector(".textdepannagelong");

const service2 = document.querySelector(".service2");
const carroserie = document.querySelector(".carroserie");
const textcarroserie = document.querySelector(".textcarroserie");
const textdecarroserielong = document.querySelector(".textdecarroserielong");

const service3 = document.querySelector(".service3");
const Videange = document.querySelector(".Videange");
const textVideange = document.querySelector(".textVideange");
const textVideangelong = document.querySelector(".textVideangelong");
const divFooter = document.querySelector(".footer");

LirePlus1.addEventListener("click", () => {
  service.classList.toggle("serviceAvantage");
  depannage.classList.toggle("depannageAvantage");
  textdepannage.classList.toggle("textdepannageAvantage");
  textdepannagelong.classList.toggle("textdepannagelongAvantage");
});

LirePlus2.addEventListener("click", () => {
  service2.classList.toggle("serviceAvantage2");
  carroserie.classList.toggle("carroserieAvantage");
  textcarroserie.classList.toggle("textcarroserieAvantage");
  textdecarroserielong.classList.toggle("textdecarroserielongAvantage");
});

LirePlus3.addEventListener("click", () => {
  service3.classList.toggle("serviceAvantage3");
  Videange.classList.toggle("VideangeAvantage");
  textVideange.classList.toggle("textVideangeAvantage");
  textVideangelong.classList.toggle("textVideangelongAvantage");
});

divFooter.addEventListener("click", () => {
  divFooter.style.display = "none";
});

// voiture concerné
const porsheGt2 = document.querySelector(".porsheGt2");
const DetailsCar = document.querySelector(".DetailsCar");
const slide = [
  "images/proshe gt2 RS.jpg",
  "images/porshe gt2RS intérieur 1.jpg",
  "images/porsche-911-gt2RS interieur 2.png",
];
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];
}

porsheGt2.addEventListener("click", () => {
  if (DetailsCar.style.opacity == 0) {
    DetailsCar.style.display = "block";
    DetailsCar.style.opacity = "100";
  } else {
    DetailsCar.style.display = "none";
    DetailsCar.style.opacity = "0";
  }
});
