var cuentas = [
  { nombre: "mali", password:"12345" ,saldo: 200 },
  { nombre: "gera", password:"12345" ,saldo: 290 },
  { nombre: "mauri", password:"12345" ,saldo: 67 }
];

let usuarioRegistrado=null;

function ingresar(usuario, password){
  let usuarioEncontrado = cuentas.find(
    (cuenta)=> usuario === cuenta.nombre && password === cuenta.password
  );
  return usuarioEncontrado;
}

const usuario = document.getElementById("formUsuario");
const password = document.getElementById("formPassword");
const buttonLogin = document.getElementById("formLogin");

let usuarioIngresado = "";
let passwordIngresado= "";

usuario.addEventListener("change", function (event) {
  console.log("el usuario =>", event.target.value); 
  usuarioIngresado = event.target.value;
});


password.addEventListener("change", function(event){
  console.log("el password =>", event.target.value);
  passwordIngresado = event.target.value;
});

// buttonLogin.addEventListener("click",function(event){
//   event.preventDefault();

// usuarioRegistrado = login(usuarioIngresado,passwordIngresado);

// if (usuarioRegistrado) {
//   localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioRegistrado));//setearme en la memoria del navegador el usuario
//   window.location= "./home.html"// ME DIRIGE A OTRA PARTE DE MI SITIO, EJ, OTRO HTML

// } else {
//   alert("Usuario o contraseña incorrectos");
// }
// });

buttonLogin.addEventListener("click", function (event) {
  event.preventDefault();

  usuarioRegistrado = ingresar(usuarioIngresado, passwordIngresado);

  if (usuarioRegistrado) {
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioRegistrado));//setearme en la memoria del navegador el usuario
    window.location= "./home.html"// ME DIRIGE A OTRA PARTE DE MI SITIO, EJ, OTRO HTML
  
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});

console.log("HAY USUARIO REGISTRADO??????????????????????", usuarioRegistrado);