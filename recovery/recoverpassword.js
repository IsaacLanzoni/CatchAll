firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "../home/home.html";
    }
})

function onClickRecoverButton(){
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.confirmPassword().value
    ).then(response => {
        recoverPassword();
    }).catch(error => {
        hideLoading();
       alert(errorMessageLogin(error)) 
    });
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

function recoverPassword(){
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert('Email de Redefinição Enviado. Verifique seu Email para mais informações');
    }).catch(error =>{
        hideLoading();
        alert(errorMessageLogin(error));
    });
}

function onClickLoginBackButton() {
    showLoading();
    setTimeout(() => {
        window.location.href = "../login/index.html";
    }, 3000);
}

function onClickRegisterLink() {
    showLoading();
    setTimeout(() => {
        window.location.href = "register/register.html";
    }, 3000);
}

function onClickButton() {
    toggleEmailErrors();
    tooglePasswordErrors();
    toggleSamePassword();
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

    form.confirmPassword().addEventListener("input", () => {
        toggleSamePassword();
        toggleButtonsDisable();
    })
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

function toggleSamePassword() {
    const confirmPassword = form.confirmPassword().value;
    const password = form.password().value;

    form.passwordDifferentError().style.display = password == confirmPassword ? "none" : "block";
    form.passwordDifferentRequiredError().style.display = confirmPassword ? "none" : "block"; 
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
    const showpasswordtwo = form.showPasswordTwo();
    const password = form.password();
    const confirmPassword = form.confirmPassword();

   showpassword.addEventListener('click', function () {
        if (password.type === 'password') {
            password.type = 'text';
            showpassword.querySelector('img').src = '../images/lock-open-alt-solid-24.png';
        } else {
            password.type = 'password';
            showpassword.querySelector('img').src = '../images/lock-alt-solid-24.png';
        }
    });

    showpasswordtwo.addEventListener('click', function () {
        if (confirmPassword.type === 'password') {
            confirmPassword.type = 'text';
            showpasswordtwo.querySelector('img').src = '../images/lock-open-alt-solid-24.png'; 
        } else {
            confirmPassword.type = 'password';
            showpasswordtwo.querySelector('img').src = '../images/lock-alt-solid-24.png'; 
        }
    });
});


const form = {
    email: () => document.getElementById('recover-email-input'),
    password: () => document.getElementById('recover-password-input'),
    confirmPassword: () => document.getElementById('recover-confirm-password-input'),
    loginButton: () => document.getElementById('recover-button'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),       
    emailRequiredError: () => document.getElementById('email-required-error'),
    showPassword: () => document.getElementById('show-password'),
    showPasswordTwo: () => document.getElementById('show-password-2'),
    passwordDifferentRequiredError: () => document.getElementById('different-password-required-error'),
    passwordDifferentError: () => document.getElementById('different-password-error'),
    passwordInvalidError: () => document.getElementById('password-invalid-error'),       
    passwordRequiredError: () => document.getElementById('password-required-error'),
    


}