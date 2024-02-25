let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))

const tituloBienvenida = document.getElementById("tituloBienvenida")
const logoutButton = document.getElementById("logout")

tituloBienvenida.innerHTML += usuarioLogueado.nombre;

logoutButton.addEventListener("click", function(){
  localStorage.removeItem(usuarioLogueado);
  window.location = "./index.html";
});

//es necesario recibir valores del html para realizar las consultas
const buttonSaldo = document.getElementById("saldo");
const retirarMonto = document.getElementById("retirar");

let montoRetirado = "";

//consulta de saldo
buttonSaldo.addEventListener("click", function(event){
  event.preventDefault();
  let saldo = usuarioLogueado.saldo;
  console.log("el saldo es => ",saldo);
});

// ------------------------función depositar dinero--------------------------------------

// declaramos una variable para almacenar el id del input de deposito
const monto = document.getElementById("monto");
const buttonDeposito = document.getElementById("deposito");

// es necesario crear una variable para almacenar el valor del input
let montoIngresado;
let saldoCuenta = usuarioLogueado.saldo;

console.log("saldoCuenta11",usuarioLogueado.saldo);

// funcion depositar
function depositar(montoIngresado){
usuarioLogueado.saldo += parseInt( montoIngresado);
console.log("saldo cuenta funcion",saldoCuenta);
  return usuarioLogueado.saldo;
}

// mostrar los datos que recibimos del input
monto.addEventListener("change", function (event) {
  console.log("el monto =>", event.target.value); 
  return montoIngresado = event.target.value;
});

// boton de deposito
buttonDeposito.addEventListener("click", function(event){
  event.preventDefault();
  
  depositar(montoIngresado);

  localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
  return usuarioLogueado;

});

// ---------------------funcion retirar----------------------------

const retiro = document.getElementById("retiro");
const buttonRetiro = document.getElementById("buttonRetiro");

let montoRetiro;

function retirar(montoRetiro){
  usuarioLogueado.saldo -= parseInt (montoRetiro);
  console.log("la resta es dddddddddddd",usuarioLogueado.saldo);
  console.log("se retira", usuarioLogueado.saldo);
  return usuarioLogueado.saldo;
};

retiro.addEventListener("change", function (event) {
  console.log(("esto ingresa para retiro => ",event.target.value));
  montoRetiro = event.target.value;
  });

buttonRetiro.addEventListener("click", function(event){
  event.preventDefault();

  retirar(montoRetiro);

  localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));
  return usuarioLogueado;

});