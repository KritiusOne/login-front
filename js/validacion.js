export const validar = (regExpresion, content)=>{
  return regExpresion.test(content)
}
export const validarContraseña =(regExpresion,password,confirmPassword)=>{
  return password == confirmPassword ? regExpresion.test(password) : false
}
export const ExpRegulares = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  contraseña: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])/,
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // la misma para el apellido
}