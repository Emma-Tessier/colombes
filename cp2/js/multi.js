let myCmptr = 0;
let myNomElement = "";

let myConteneurHtml = document.getElementById("Conteneur");
let myTblClique = Array.from(document.querySelectorAll(".myDiv"));

for (myCmptr = 0; myCmptr < myTblClique.length; myCmptr++) {
  myTblClique[myCmptr].addEventListener('click', myOnClick);
}

function myOnClick(event) {
  let myIndice = myTblClique.indexOf(event.currentTarget);
  if (myIndice != -1) {
    myNomElement = myTblClique[myIndice].textContent;
    alert('Elément cliqué :' + myNomElement);
  }
  
}
