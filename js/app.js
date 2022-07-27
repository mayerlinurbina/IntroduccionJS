const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const cantidad = document.getElementById("cantidad").value;
  console.log("cantidad", cantidad) 
  const color = document.getElementById("color").value;
  console.log("Variable color", color);

  const precioTot = document.getElementById("precioTotal");
  precioTot.innerHTML = (cantidad * 400000).toLocaleString();
  const cantidadTotal = document.getElementById("cantidadTotal");  
  cantidadTotal.innerHTML = cantidad;

  const colorCirculo = document.querySelector("colorCircle");
  colorCirculo.style.backgroundColor = color;
  console.log();
});

const color = document.getElementById("color");
color.addEventListener("change", function () {
  const colorValue = document.getElementById("color").value;
  const colorCirculo = document.getElementById("colorCircle");
  colorCirculo.style.backgroundColor = colorValue;
});