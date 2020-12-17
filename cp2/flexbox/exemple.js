// si j'ai deux variables existante comment je fais pour qu'elle est toute la même valeur
let emma=0;
let tessier=4;
// déclaration d'une variable avec "let" nommé "emma" avec une valeur = à "0"

let echange=emma;
// ca va prendre la valeur qu'il y a dans la boite une 
let emma=tessier;
//  lorsqu'on assigne la variable pour changer de valeur nous n'avons pas besoin de mettre "let" cela échange nos valeurs 1 à la valeur de 2 et 2 à la valeur de 1

console.log("La valeur de la 1ere variable="+emma);
La valeur de la 1ere variable=4 
console.log("la valeur de la 2eme variable="+tessier);
la valeur de la 2eme variable=0

// Cela permet de savoir si on a bien échanger nos valeurs

NaN : "note a number"

3/0
// Infinity console qui répond

3*"emma"
// NaN console qui répond
// Si il répond NaN c'est que notre cacule est faux 





const nom="Michou";
const message2=`Bonjour ${nom}!`;
// C'est un template string
// // undefined
console.log(message2);
Bonjour Michou! 
// undefined




const message2= "Il m'a dit\"chut!\"";
// undefined




const x=3
undefined
typeof(x);
// "number"
// exemple typeof

!0
true



// négation de false

5=="5"
true
false==0
true
5==="5"
false
false===0
false
5!=="5"
true
false?1:"bonjour !";
"bonjour !"




// Comment générer un nombre aléaoire : 

Math.random()
// 0.8019063707078004 nombre aléatoire donné par la machine
Math.random(*10)
Uncaught SyntaxError: expected expression, got '*'
debugger eval code:1:12
Math.random()*10
// fois 10 c'est pour trouver un chiffre entre 0 et 10
5.570662772480092 
Math.floor(Math.random()*10)
// 6 nombres aléatoire sans virgule grace au math.floor





const resultat1=Math.floor(Math.random()*10)
// Il est référable de mettre la ligne de code pour éviter de réécrire le chiffre, elle est stocké




prompt ("Bonjour à tous !");
// permet de d'écrire une phrase qui va s'ouvrir dans une modale les parenthéses sont la fonction et les "" sont la chaine de caractére




const reponse=prompt ("Bonjour à tous !");
// Création d'une variable réponse qui contient notre prompt afin qu'on n'est pas à la répeter 




typeof(reponse);
// "string"
Number(prompt("Bonjour à tous !"));
// le converti en nombre




const reponse3=Number(prompt("Bonjour à tous !"));
// 3 il s'agit du numéro nombre entré dans la modale
typeof(reponse2);
"number"





while(true){ alert("Hello !")}
// c'est une boucle infinie
while(false){ alert("Hello !")}
// cela ne fait rien



const resultat=Math.floor(Math.random()*10);

let reponse=Number(prompt("Bonjour à tous !"));

if(resultat > reponse){
    reponse=Number(prompt("Trop grand !"));
  } 

else if (resultat < reponse){ 
    reponse=Number(prompt("Trop petit !"));
    } 

else if(resultat == reponse){
       alert ("Bravo!");
    }
// creation d'une boucle on remplace "const" par "let" et l'on rajoute notre variable ainsi que la valeur Number avec un prompt.








const resultat=Math.floor(Math.random()*10);

let reponse=Number(prompt("Bonjour à tous ! Trouvez un chiffre entre 0 et 10 ! A vous de jouer !"));

while (true) {

if(reponse > resultat){
    reponse=Number(prompt(`Trop grand ! choisissez un autre chiffe (la bonne réponse était ${resultat})`));
  } 

else if (reponse < resultat){ 
    reponse=Number(prompt(`Trop petit ! choisissez un autre chiffe (la bonne réponse était ${resultat})`));
    }    
    else {
       alert("Félicitations!");
    }
}

// bien mettre while(true) const peut venir après let et le resultat s'affiche grace à (la bonne réponse était ${resultat}) il faut bien mettre des ctrl 7*2




const resultat=Math.floor(Math.random()*10);

let reponse=Number(prompt("Bonjour à tous ! Trouvez un chiffre entre 0 et 10 ! A vous de jouer !"));

let gagné=false;

do{

if(reponse > resultat){
    reponse=Number(prompt(`Trop grand ! choisissez un autre chiffe (la bonne réponse était ${resultat})`));
  } 

else if (reponse < resultat){ 
    reponse=Number(prompt(`Trop petit ! choisissez un autre chiffe (la bonne réponse était ${resultat})`));
    } 

    else {
      gagné=true;
       alert("Félicitations!");
    };

} while(!gagné);

// c'est une boucle avec un booléen, "let gagné=false pour pouvoir l'introduire dans la boucle, do va permet de donner l'instuction de faire la boucle tant que nous n'avons pas gagné.
// on a crée une variable gagné dans else avec un booléen "true", "while" a une fonction négative (!gagné) qui va permettre dorner à la boucle de ne pas s'arréter tant que la partie n'est pas gagné.

let rejouer=true;
while (rejouer) {
const resultat = Math.floor(Math.random() * 10) 
let saisie=prompt("saisissez un nombre");
while (resultat != saisie && saisie != null) {
   if (saisie>10){
     saisie=prompt("Ce n'est pas un nombre compris entre 0 et 10 ");
   }else if (isNaN(saisie)) {
    //  nous utilisons isNaN pour eviter de convertir en Number
     saisie = prompt("ce n'est pas un nombre");
   }else if (saisie>resultat) {
      saisie = prompt(
    `Trop grand ! choisissez un autre chiffe (la bonne réponse était ${resultat})`);
   }else if (saisie<resultat){
    saisie=prompt(
    `Trop petit ! choisissez un autre chiffe (la bonne réponse était ${resultat})`);
}
}if (saisie==null) {
  rejouer=false;
  alert("vous avez quitté");
} else if (!confirm ("Bravo !  Vous avez gagné ! \n Souhaitez-vous rejouer ?")){
  rejouer=false;
  alert("Aurevoir !");
}
}

// il s'agit d'une boucle qui permet de rejouer à l'infini


let choix = 3;
switch(choix) {
  case 0:
    console.log("case 0");
    break;
  case 1:
    console.log("case 1");
    break;
  case 3:
    console.log("case 3");
    break;
  case 7:
    console.log("case 7");
    break;
  default:
    console.log("default");
}


// elle met case 3; case 7;default sans le break !  il est important de mettre un break 


let t1 = [];
let t2 = t1;
t1.push("coucou");
console.log(t2);//
Array [ "coucou" ]

const mult = function (a, b) {
  return a * b;
};

// création d'une fonction mult est le nom de ma vatiable et a,b vont contenir mes valeurs

 mult (2,5)

//  Est a mettre dans la console





const mult = function (a, b) {
  return a * b;
};
const puiss = function (x, y) {
  let resultat = 1;

// Pourquoi 1 ? element neutre de l'élément utilusé, calculer par 1 c'est de calculer le nombre par lui meme 

  for (let i = 0; i < y; i++) {
    resultat = mult(resultat, x);
  }
  return resultat;
};

console.log(puiss(3,5));
// 243
// a mettre dans la console et il affiche un objet

const mult2 =(x,y)=>x*y;

// fonction qui veut faire la meme chose





const logPerso = (2) => (message) => console.log(2 + message);
const creerUnMultiplieur = (5) => (x) => 5 * z;

// le 2 est une préfixe et le 5 est un facteur

const t = ["Hello", "chacun", "chacune", "!"];

for (let i = 0; i < t.length; i++) {

  // i est infini, i mettra a jour la longueur du tableau et il s'agrémente de 1 en fonction du nombre de mot ajouter dans mon crochet

  console.log(t[i]);
}

const line = (t) => {
  for (let i = 0; i < t.length; i++) {
    console.log(t[i]);
  }
};

