import "./styles.css";
let btnEnv = document.getElementById("btnEnviar");
let dato1 = document.getElementById("dato");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let mensaje = document.getElementById("mensaje");
rotulo1.innerHTML = "Ingresar monto: ";
rotulo2.innerHTML = "Ingresar cantidad: ";
btnEnv.addEventListener("click", () => {
  let monto: number = dato1.value;
  let cantidad: number = dato2.value;
  let montoConDescuento: number = 0;
  let descuento: number = 0;
  let precioTotal: number = 0;
  let montoAhorrado: number = 0;
  precioTotal = monto * cantidad;
  if (precioTotal >= 1000) {
    descuento = (precioTotal * 10) / 100;
    montoConDescuento = precioTotal - descuento;
    montoAhorrado = precioTotal - montoConDescuento;
    console.log("El total de su compra es de: $" + precioTotal);
    console.log("Por gastar mas de $1000 tiene un 10% de descuento.");
    console.log("Con descuento el monto a pagar es: $" + montoConDescuento);
    console.log("Usted ha ahorrado: $" + montoAhorrado);
    mensaje.innerHTML = "Con descuento el monto a pagar es: $" + montoConDescuento;
  } else {
    console.log("No tiene descuento. El monto a pagar es: " + precioTotal);
  }
});