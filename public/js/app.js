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