const togglePassword = button =>{
    button.classList.toggle("showing")

    const passwordLogin = document.getElementById("password-login")
    const passwordRegister = document.getElementById("password-register")

    passwordLogin.type = passwordLogin.type === "password" ? "text" : "password"
    passwordRegister.type = passwordRegister.type === "password" ? "text" : "password"
}

const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginRegisterCards = document.getElementById('login-register-cards');
const closeLoginBtn = document.getElementById('closeLogin');
const controls = document.getElementsByClassName('control');
const usernameLogin = document.getElementById('username-login');
const loginCard = document.getElementById('login-card');
const registerCard = document.getElementById('register-card');
const closeRegister = document.getElementById('closeRedister');
const emailRegister = document.getElementById('email-register');

loginBtn.addEventListener('click', (e)=>{
    loginRegisterCards.classList.add('visible');
    loginCard.classList.add('visible');
    setTimeout(function(){
        usernameLogin.focus();
    }, 100);
})
closeLoginBtn.addEventListener('click', (e)=>{
    loginRegisterCards.classList.remove('visible');
    loginCard.classList.remove('visible');
    for(let i=0; i<controls.length; i++){
        controls[i].value = '';
    }
})
registerBtn.addEventListener('click', (e)=>{
    loginRegisterCards.classList.add('visible');
    registerCard.classList.add('visible');
    setTimeout(function(){
        emailRegister.focus();
    }, 100);
})
closeRegister.addEventListener('click', (e)=>{
    loginRegisterCards.classList.remove('visible');
    registerCard.classList.remove('visible');
    for(let i=0; i<controls.length; i++){
        controls[i].value = '';
    }
})

const languages = document.getElementsByClassName('language');
const languageSlide = document.getElementById('language-slide');
const languageSpan = document.getElementById('language-span');
const languageCard = document.getElementById('language-card');
const languageH5 = document.getElementById('language-h5');

languageSpan.addEventListener('mouseenter', (e)=>{
    languageSlide.classList.add('height-100');
})
languageCard.addEventListener('mouseleave', (e)=>{
    languageSlide.classList.remove('height-100');
})
for(let i=0; i<languages.length; i++){
    languages[i].addEventListener('click', (e)=>{
        languageSlide.classList.remove('height-100');
        languageH5.innerHTML = languages[i].id;
    })
}
