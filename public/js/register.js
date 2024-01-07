const togglePassword = button =>{
    button.classList.toggle("showing")

    const passwordLogin = document.getElementById("password-login")
    const passwordRegister = document.getElementById("password-register")

    passwordLogin.type = passwordLogin.type === "password" ? "text" : "password"
    passwordRegister.type = passwordRegister.type === "password" ? "text" : "password"
}

const createNewAccount = document.getElementById('create-new-account');
const alreadyHaveAccount = document.getElementById('already-have-account');
const registerCard = document.getElementById('register-card');
const loginCard = document.getElementById('login-card');


createNewAccount.addEventListener('click', (e)=>{
    registerCard.classList.add('visible');
    loginCard.classList.add('hidden');
});
alreadyHaveAccount.addEventListener('click', (e)=>{
    registerCard.classList.remove('visible');
    loginCard.classList.remove('hidden');
});

const wrongValueDiv = document.getElementById('wrong-value-div');
const wrongValueDivReg = document.getElementById('wrong-value-div-reg');
loginCard.addEventListener('submit', loginFormProcessing);

function loginFormProcessing(ev){
    let data;

    data = document.getElementById('username-login');
    const username = data.value.trim();
    if(username == '' || username.length<8 || username.length > 15){
        data.focus();
        ev.preventDefault();
        data.classList.add('wrong-value');
        wrongValueDiv.textContent = 'Broj karaktera mora biti između 8 i 15';
        return false;
    }else{
        data.classList.remove('wrong-value');
        wrongValueDiv.textContent = '';
    }

    data = document.getElementById('password-login');
    const password = data.value.trim();
    var regularExpression  = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
    if(password == '' || regularExpression.test(password) === false){
        data.focus();
        ev.preventDefault();
        data.classList.add('wrong-value');
        wrongValueDiv.textContent = 'Broj karaktera mora biti između 8 i 15. Lozinka mora sadržati bar jedno veliko slovo, jedan broj i jedan specijalan karakter';
        return false;
    }else{
        data.classList.remove('wrong-value');
        wrongValueDiv.textContent = '';
    }
}

registerCard.addEventListener('submit', RegisterFormProcessing);

function RegisterFormProcessing(ev){
    let data;

    data = document.getElementById('email-register');
    const email = data.value.trim();
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false){
        data.focus();
        ev.preventDefault();
        data.classList.add('wrong-value');
        wrongValueDivReg.textContent = 'Email nije ispravan';
        return false;
    }else{
        data.classList.remove('wrong-value');
        wrongValueDivReg.textContent = '';
    }

    data = document.getElementById('username-register');
    const username = data.value.trim();
    if(username == '' || username.length<8 || username.length > 15){
        data.focus();
        ev.preventDefault();
        data.classList.add('wrong-value');
        wrongValueDivReg.textContent = 'Broj karaktera mora biti između 8 i 15';
        return false;
    }else{
        data.classList.remove('wrong-value');
        wrongValueDivReg.textContent = '';
    }

    data = document.getElementById('password-register');
    const password = data.value.trim();
    var regularExpression  = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
    if(password == '' || regularExpression.test(password) === false){
        
        data.focus();
        ev.preventDefault();
        data.classList.add('wrong-value');
        wrongValueDivReg.textContent = 'Broj karaktera mora biti između 8 i 15. Lozinka mora sadržati bar jedno veliko slovo, jedan broj i jedan specijalan karakter';
        return false;
    }else{
        data.classList.remove('wrong-value');
        wrongValueDivReg.textContent = '';
    }
}
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const hamburger = document.getElementById('burger');
const logo = document.getElementById('logo');
const list = document.getElementById('nav-list');
const nav = document.getElementById('nav');
const loginFormOutside = document.getElementById('login-form-outside');
const loginRegisterCards = document.getElementById('login-register-cards1');

const openList = function(){
    line1.style.transform = "rotate(45deg)";
    line2.style.transform = "scaleY(0)";
    line3.style.transform = "rotate(-45deg)";
    list.classList.remove('height-0-850px');
    list.classList.add('height-300');
    logo.classList.add('none');
    hamburger.classList.add('margin-48');
    hamburger.classList.remove('margin-58');
    nav.classList.add('nav-clicked');
    line1.classList.add('white');
    line3.classList.add('white');
    clicked = true;
}
const closeList = function(){
    line1.style.transform = "rotate(0deg)";
    line2.style.transform = "scaleY(1)";
    line3.style.transform = "rotate(0deg)";
    list.classList.add('height-0-850px');
    list.classList.remove('height-300');
    setTimeout(function(){
        logo.classList.remove('none');
        hamburger.classList.remove('burger-margin-left');
        hamburger.classList.add('margin-58');
        hamburger.classList.remove('margin-48');
        nav.classList.remove('nav-clicked');
        line1.classList.remove('white');
        line3.classList.remove('white');
    }, 320);
    clicked = false;
}
let clicked = false;

hamburger.addEventListener('click', function(){
    if(clicked === false){
        openList();
    }else{
        closeList();
    }
});

list.addEventListener('click', function(){
    if(clicked === true)
        closeList();
});