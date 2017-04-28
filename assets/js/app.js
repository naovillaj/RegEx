
var validaciones = document.getElementById("enviar");
var password = document.getElementById("password");
var cPassword = document.getElementById("cPassword");


validaciones.addEventListener("click", function(e){
  e.preventDefault();
  if(password.value !== cPassword.value){
    alert("Las contraseñas son distintas");
    cPassword.focus();
    console.log(password.value);
  }

})
