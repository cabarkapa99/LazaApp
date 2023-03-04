const navLis = document.getElementsByClassName('nav-li');
const navAs = document.getElementsByClassName('nav-a');
const hidenElements = document.getElementsByClassName('hiden-element');
const liHero = document.getElementById('li-hero');
const liVehicle = document.getElementById("li-vehicle");
const hero = document.getElementById('hero');
const vehicles = document.getElementById('vehicles');

for(let i=1; i<navLis.length-1; i++){
    navAs[i].addEventListener('click', (e)=>{
        for(let j=0; j<navLis.length; j++){
            navAs[j].classList.remove('li-clicked');
            navLis[j].classList.remove('li-clicked1');
            navAs[j].classList.remove('li-clicked1');
            navAs[j].classList.remove('li-clicked2');
        }
        if(i != navLis.length-1){
            navAs[i+1].classList.add('li-clicked');
            navLis[i+1].classList.add('li-clicked1');
        }
        navAs[i].classList.add('li-clicked1');
        
        if(i != 0){
            navAs[i-1].classList.add('li-clicked2');
            navLis[i-1].classList.add('li-clicked1');
        }
        for(let i=0; i<hidenElements.length; i++){
            hidenElements[i].classList.add('hiden');
        }
    });
}
liHero.addEventListener('click', (e)=>{
    hero.classList.remove('hiden');
});
liVehicle.addEventListener('click', (e)=>{
    vehicles.classList.remove('hiden');
})

const studentBtn = document.getElementById('student-btn');
const modals = document.getElementById('modals');
const studentModal = document.getElementById('student-modal');
const studentModalX = document.getElementById('student-modal-x');
const instructorBtn = document.getElementById('instructor-btn');
const instructorModal = document.getElementById('instructor-modal');
const instructorModalX = document.getElementById('instructor-modal-x');
const vehicleBtn = document.getElementById('vehicle-btn');
const vehicleModal = document.getElementById('vehicle-modal');
const vehicleModalX = document.getElementById('vehicle-modal-x');
const aBtn = document.getElementById('a-btn');
const aModal = document.getElementById('a-modal');
const aModalX = document.getElementById('a-modal-x');

studentBtn.addEventListener('click', (e)=>{
    modals.classList.remove('hiden');
    studentModal.classList.remove('hiden');
})
studentModalX.addEventListener('click', (e)=>{
    modals.classList.add('hiden');
    studentModal.classList.add('hiden');
})

instructorBtn.addEventListener('click', (e)=>{
    modals.classList.remove('hiden');
    instructorModal.classList.remove('hiden');
})
instructorModalX.addEventListener('click', (e)=>{
    modals.classList.add('hiden');
    instructorModal.classList.add('hiden');
})

vehicleBtn.addEventListener('click', (e)=>{
    modals.classList.remove('hiden');
    vehicleModal.classList.remove('hiden');
})
vehicleModalX.addEventListener('click', (e)=>{
    modals.classList.add('hiden');
    vehicleModal.classList.add('hiden');
})

aBtn.addEventListener('click', (e)=>{
    modals.classList.remove('hiden');
    aModal.classList.remove('hiden');
})
aModalX.addEventListener('click', (e)=>{
    modals.classList.add('hiden');
    aModal.classList.add('hiden');
})


const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const hamburger = document.getElementById('burger');
const list = document.getElementById('nav-list');
const nav = document.getElementById('nav');
const leftSide = document.getElementById('left-side');

const openList = function(){
    line1.style.transform = "rotate(45deg)";
    line2.style.transform = "scaleY(0)";
    line3.style.transform = "rotate(-45deg)";
    line1.classList.add('white');
    line2.classList.add('white');
    line3.classList.add('white');
    leftSide.classList.remove('translate-150');
    nav.classList.add('nav-clicked');
    clicked = true;
    /*toogle*/
}
const closeList = function(){
    line1.style.transform = "rotate(0deg)";
    line2.style.transform = "scaleY(1)";
    line3.style.transform = "rotate(0deg)";
    line1.classList.remove('white');
    line2.classList.remove('white');
    line3.classList.remove('white');
    leftSide.classList.add('translate-150');
    setTimeout(function(){
        hamburger.classList.remove('burger-margin-left');
        nav.classList.remove('nav-clicked');
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

const bellOn = document.getElementById('bell-on');
const bellOff = document.getElementById('bell-off');
const notifications = document.getElementById('notifications');

const openList1 = function(){
    notifications.classList.remove('translate150');
    bellOn.classList.add('none');
    bellOff.classList.add('block');
    clicked1 = true;
    /*toogle*/
}
const closeList1 = function(){
    notifications.classList.add('translate150');
    bellOn.classList.remove('none');
    bellOff.classList.remove('block');
    clicked1 = false;
}

let clicked1 = false;

bellOn.addEventListener('click', function(){
    if(clicked1 === false){
        openList1();
    }else{
        closeList1();
    }
});
bellOff.addEventListener('click', function(){
    if(clicked1 === false){
        openList1();
    }else{
        closeList1();
    }
});

