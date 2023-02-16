const navLis = document.getElementsByClassName('nav-li');
const navAs = document.getElementsByClassName('nav-a');

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
    });
}


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
