var validaciones = document.getElementById("validaciones");
var password = document.getElementById("password").value;
var cPassword = document.getElementById("cPassword").value;

validaciones.addEventListener("click", function(e){
  e.preventDefault();

  if(password !== cPassword){
    alert("Las contraseñas son distintas");
    cPassword.focus();
    console.log(password.value);
  }

})
