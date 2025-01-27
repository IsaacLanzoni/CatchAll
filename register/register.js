firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "../home/home.html";
    }
});

function onClickRegisterButton(){
    showLoading();
    const email = form.email().value;
    const password = form.password().value;

    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).then(() => {
        hideLoading();
        window.location.href = "../home/home.html";
    }).catch(error => {
        hideLoading();
        alert(errorMessageLogin(error));
    })
}

function errorMessageLogin(error) {
    if(error.code == 'auth/invalid-email') {
        onClickButton();
       return 'Email já cadastrado';
    }
      else if(error.code == 'auth/invalid-credential' || 'auth/weak-password') {
        onClickButton();
        return 'Erro de senha, tente novamente';
    }
    else{
        return error.message;
    }
}

function onClickButton() {
    toggleEmailErrors();
    togglePasswordErrors();
}

document.addEventListener("DOMContentLoaded", function () {

    form.email().addEventListener("input", () => {
        toggleEmailErrors(); 
        toggleButtonsDisable(); 
    });

    form.password().addEventListener("input", () => {
        togglePasswordErrors(); 
        toggleButtonsDisable();
    });

    form.confirmPassword().addEventListener("input", () => {
        toggleButtonsDisable();
        toggleSamePassword();
    });
});

function onClickLoginBackButton() {
    showLoading();
    setTimeout(() => {
        window.location.href = "../login/index.html";
    }, 3000);
}

function onChangeEmail() {
    toggleEmailErrors();
    toggleButtonsDisable();
}

function onChangePassword() {
    togglePasswordErrors();
    toggleButtonsDisable();
}

function isPasswordValid() {
    const password = form.password().value;

    if(!password){
        return false;
    }
     return true;
    
}


function toggleEmailErrors() {
    const email = form.email().value;

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    form.emailRequiredError().style.display = email ? "none" : "block";
}

function togglePasswordErrors () {
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? "none" : "block";
    form.passwordInvalidError().style.display = password.length > 6 ? "none" : "block";
}

function toggleSamePassword () {
    const confirmPassword = form.confirmPassword().value;
    const password = form.password().value;

    form.passwordDifferentError().style.display = password == confirmPassword ? "none" : "block";
    form.passwordDifferentRequiredError().style.display = confirmPassword ? "none" : "block"
}

function toggleButtonsDisable () {
    const email = form.email().value;
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid(); 

    form.registerButton().disabled = !emailValid;

    form.registerButton().disabled = !emailValid || !passwordValid;
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
    email: () => document.getElementById('register-email-input'),
    password: () => document.getElementById('register-password-input'),
    confirmPassword: () => document.getElementById('register-confirm-password-input'),
    registerButton: () => document.getElementById('register-button'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),       
    emailRequiredError: () => document.getElementById('email-required-error'),       
    passwordInvalidError: () => document.getElementById('password-invalid-error'),       
    passwordRequiredError: () => document.getElementById('password-required-error'),
    passwordDifferentRequiredError: () => document.getElementById('different-password-required-error'),
    passwordDifferentError: () => document.getElementById('different-password-error'),
    showPassword: () => document.getElementById('show-password'),
    showPasswordTwo: () => document.getElementById('show-password-2'),


}