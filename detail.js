const DetailsCar = document.querySelector(".DetailsCar");
const slide = ["images/Citroen_C1.jpg", "images/Citroen-C1_2.jpg"];
let numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").src = slide[numero];
}
