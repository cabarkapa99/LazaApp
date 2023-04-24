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
const languageDiv = document.getElementById('language-div');
const languageCard = document.getElementById('language-card');
const languageH5 = document.getElementById('language-h5');

languageDiv.addEventListener('mouseenter', (e)=>{
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
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const hamburger = document.getElementById('burger');
const logo = document.getElementById('logo');
const list = document.getElementById('nav-list');
const nav = document.getElementById('nav');
const loginFormOutside = document.getElementById('login-form-outside');

const openList = function(){
    line1.style.transform = "rotate(45deg)";
    line2.style.transform = "scaleY(0)";
    line3.style.transform = "rotate(-45deg)";
    list.classList.remove('height-0-850px');
    list.classList.add('height-300');
    logo.classList.add('none');
    loginFormOutside.classList.add('none');
    hamburger.classList.add('margin-48');
    hamburger.classList.remove('margin-58');
    nav.classList.add('nav-clicked');
    line1.classList.add('white');
    line3.classList.add('white');
    languageCard.style.display = 'block';
    loginFormOutside.style.display = 'block';
    clicked = true;
    /*toogle*/
}
const closeList = function(){
    line1.style.transform = "rotate(0deg)";
    line2.style.transform = "scaleY(1)";
    line3.style.transform = "rotate(0deg)";
    list.classList.add('height-0-850px');
    list.classList.remove('height-300');
    setTimeout(function(){
        logo.classList.remove('none');
        loginFormOutside.classList.remove('none');
        hamburger.classList.remove('burger-margin-left');
        hamburger.classList.add('margin-58');
        hamburger.classList.remove('margin-48');
        nav.classList.remove('nav-clicked');
        line1.classList.remove('white');
        line3.classList.remove('white');
        languageCard.style.display = 'none';
        loginFormOutside.style.display = 'none';
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

const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");
const questions = document.querySelectorAll(".question");
const angles = document.querySelectorAll(".fa-angle-down");

for(let i = 0; i<arrows.length; i++){
    arrows[i].addEventListener("click", () => {
        
        const currentlyOpen = document.querySelectorAll(".answer");

        for(let j=0; j<currentlyOpen.length; j++){
            if(!currentlyOpen[j].classList.contains("hidden") && currentlyOpen[j] != currentlyOpen[i]){
                currentlyOpen[j].classList.toggle("hidden");
                angles[j].classList.toggle("rotate-arrow");
            }    
        }

        answers[i].classList.toggle("hidden");
        angles[i].classList.toggle("rotate-arrow");
    })
}
