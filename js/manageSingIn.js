import { validar } from "./validacion";
import { validarContraseña } from "./validacion";
import { ExpRegulares } from "./validacion";

const $next = document.querySelector(".button--Next");
const $buttonSingIn = document.querySelector(".button--singIn-First");
const CLASS_BLIND = "second-Line";
const CLASS_BUTTON_BLIND = "button--singIn-First"


const data = {
  correo: "",
  contraseña: "",
  nombre: "",
  apellido: "",
  ciudad: ""
}

$next.addEventListener("click", (e)=>{
  e.preventDefault()
  const $groupsInputs = document.querySelectorAll(`.${CLASS_BLIND}`);
  const $groupEmail = document.querySelector(".groupEmail");
  const $groupPassword = document.querySelectorAll(".app__form__sectionPassword")
  const $email = document.querySelector("#input--Correo");
  const $password = document.querySelector("#input--Password")
  const $confirmPassword = document.querySelector("#input--ConfirmPassword")
  if(validar(ExpRegulares.correo, $email.value) && validarContraseña(ExpRegulares.contraseña, $password.value, $confirmPassword.value)){
    $groupEmail.classList.add(CLASS_BLIND);
    $groupPassword.forEach((node)=>{
      node.classList.add(CLASS_BLIND)
    })
    $groupsInputs.forEach((node)=>{
      node.classList.remove(CLASS_BLIND)
    })
    $next.classList.add(CLASS_BLIND);
    $buttonSingIn.classList.remove(CLASS_BUTTON_BLIND)
  }else if(!validarContraseña(ExpRegulares.contraseña, $password.value, $confirmPassword.value)){
    alert("Las contraseñas deben coincidir y tener numeros, mayusculas, minusculas y Simbolos")
  } else{
    alert("Rellene todos los campos")
  }
})
$buttonSingIn.addEventListener("click", (e)=>{
  e.preventDefault();
  const $nombre = document.querySelector("#input--nombre")
  const $apellido = document.querySelector("#input--apellido")
  const $city = document.querySelector("#input--city")
  if(validar(ExpRegulares.nombre, $nombre.value) && validar(ExpRegulares.nombre, $apellido.value) && validar(ExpRegulares.nombre, $city)){
    // enviaria los datos al server en esta parte
  }else{
    alert("El nombre, apellido y la ciudad son obligatorios");
  }
})
