const myTitreHtml=document.querySelector('h1');
myTitreHtml.style.position="absolute";

let myTopPosition=0
let myDirection=-1;
let myNewPosition='';

function myHorizontalSlide(){
    if(myTopPosition==1400){
      myTopPosition=-400;
    }
    
    myTopPosition+=-2*myDirection;
    // +vers la droite -vers la gauche
    myTitreHtml.style.left=myTopPosition+'px';
    requestAnimationFrame(myHorizontalSlide);
}
 requestAnimationFrame(myHorizontalSlide);