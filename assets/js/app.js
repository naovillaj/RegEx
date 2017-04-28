var password = document.getElementById("password");
var cPassword = document.getElementById("cPassword");

password.onchange = cPassword.onkeyup = passwordMatch;

function passwordMatch() {
    if(password.value !== cPassword.value)
        cPassword.setCustomValidity('Las contraseñas no coinciden.');
    else
        cPassword.setCustomValidity('');
}
