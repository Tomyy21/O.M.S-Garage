const DetailsCar = document.querySelector(".DetailsCar");
const slide = [
  "images/Véhicules/Fiat500_2.JPG",
  "images/Véhicules/Fiat500_2.JPG",
  "images/Véhicules/Fiat500_3.JPG",
  "images/Véhicules/Fiat500_4.JPG",
];
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];
}
