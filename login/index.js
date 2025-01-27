firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "../home/home.html";
    }
})

function onClickEnterButton(){
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        hideLoading();
        window.location.href = "../home/home.html" 
    }).catch(error => {
        hideLoading();
       alert(errorMessageLogin(error)) 
    });
}

function forgotMyPassword() {
    showLoading();
    setTimeout(() => {
        window.location.href = "../recovery/recoverpassword.html";
    }, 3000);
}

function errorMessageLogin(error) {
    if(error.code == 'auth/invalid-credential' || 'auth/invalid-email') {
        onClickButton();
       return 'Email ou Senha Inválido';
    }
    else{
        return error.message;
    }
}

function onClickRegisterLink() {
    showLoading();
    setTimeout(() => {
        window.location.href = "../register/register.html";
    }, 3000);
}

function onClickButton() {
    toggleEmailErrors();
    tooglePasswordErrors();
}

document.addEventListener("DOMContentLoaded", function () {

    form.email().addEventListener("input", () => {
        toggleEmailErrors(); 
        toggleButtonsDisable(); 
    });

    form.password().addEventListener("input", () => {
        tooglePasswordErrors(); 
        toggleButtonsDisable();
    });
});


function onChangeEmail(){
    toggleEmailErrors();
    toggleButtonsDisable();
}

function onChangePassword(){
    tooglePasswordErrors();
    toggleButtonsDisable();
}

function isPasswordValid(){
    const password = form.password().value;

    if(!password){
        return false;
    }
     return true;
    
}

function toggleEmailErrors() {
    const email = form.email().value;

    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function tooglePasswordErrors () {
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable () {
    const email = form.email().value;
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid(); 

    form.loginButton().disabled = !emailValid;

    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email().value;
    if (!email){
        return false;
    }
    return validateEmail(email);
}


document.addEventListener("DOMContentLoaded", function () {
    const showpassword = form.showPassword();
    const password = form.password();

   showpassword.addEventListener('click', function () {
        if (password.type === 'password') {
            password.type = 'text';
            showpassword.querySelector('img').src = '../images/lock-open-alt-solid-24.png';
        } else {
            password.type = 'password';
            showpassword.querySelector('img').src = '../images/lock-alt-solid-24.png';
        }
    });
});



const form = {
    email: () => document.getElementById('login-email-input'),
    password: () => document.getElementById('login-password-input'),
    loginButton: () => document.getElementById('login-button'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),       
    emailRequiredError: () => document.getElementById('email-required-error'),
    showPassword: () => document.getElementById('show-password'),
    passwordInvalidError: () => document.getElementById('password-invalid-error'),       
    passwordRequiredError: () => document.getElementById('password-required-error'),
    


}