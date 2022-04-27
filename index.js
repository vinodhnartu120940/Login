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
username.addEventListener('keyup', function userVerify() {
    if (username.value.length >= 8) {
        username.style.border = "3px solid green";
        username_err.style.display = "none";
        username.focus();
        return true


    }


})
password.addEventListener('keyup', function passwordVerify() {
    if (password.value.length >= 8) {
        password.style.border = "3px solid green";
        password_err.style.display = "none";
        password.focus();
        return true


    }


})

// let email = document.getElementById('from1Example1');
// let password = document.getElementById('form1Example2');


// function validated() {
//     if (email.value.length == 0 || email.value.length < 9) {
//         email.style.border = "2px solid red";
//         email.focus();
//     }
// }
// email.addEventListener("textInput", function emailVerify() {
//     if (email.value.length == 0 || email.vlaue.length < 9) {
//         email.style.border = "1px solid red"
//     }
// })