let etatDiv = false;

document.getElementById("Bloc02").addEventListener('click', Div02);
// htmlElement.addEventListener

function Div02(evenement){
    if (etatDiv==false){
        evenement.target.className="divNoire";
        etatDiv=true;
    }else{
        evenement.target.className="myDiv";
        etatDiv=false;
    }
}


function Div01(moiMeme) {
  if (etatDiv == false) {
    // change la classe du bloc div
    moiMeme.className="divNoire";
    etatDiv = true;
  } else {
    // change a nouveau la classe Bloc01 moiMmeme = a Bloc01
    moiMeme.className="myDiv";
    etatDiv = false;
  }
}
