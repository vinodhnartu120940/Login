var username = document.forms['form']['username']
var password = document.forms['form']['password']

let username_err = document.getElementById("username_err");
let password_err = document.getElementById("password_err");

function validated() {
    if (username.value.length < 9) {
        username.style.border = "3px solid red"
        username.focus();
        username_err.style.display = "block";
        return false;
    }
    if (password.value.length < 9) {
        password.style.border = "3px solid red"
        password.focus();
        password_err.style.display = "block";
        return false;
    }
    alert("login successfull")
}
username.addEventListener('textInput', function userVerify() {
    if (username.value.length >= 8) {
        username.style.border = "3px solid green";
        username_err.style.display = "none";
        username.focus();
        return true


    }


})
password.addEventListener('textInput', function passwordVerify() {
    if (password.value.length >= 8) {
        password.style.border = "3px solid green";
        password_err.style.display = "none";
        password.focus();
        return true


    }


})


