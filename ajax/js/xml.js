function AfficheCourriel(){
    var xmlHTTP;
    try{
        xtmlHTTP = new XMLHttpRequest();
    }catch(error){
        alert('Votre navigateur ne gère pas Ajax: '+error);
    }
    xtmlHTTP.open("GET","./datas/courriel.xml",false);
    xtmlHTTP.send();
    var xmlDoc = xmlHTTP.responseXML;
    document.getElementById('De').innerHTML=xmlDoc.getElementByTagName('De')[0].childNodes[0].nodeValue
    document.getElementById('Dest').innerHTML=xmlDoc.getElementByTagName('Dest')[0].childNodes[0].nodeValue
    document.getElementById('Sujet').innerHTML=xmlDoc.getElementByTagName('Sujet')[0].childNodes[0].nodeValue
    document.getElementById('Message').innerHTML=xmlDoc.getElementByTagName('DeMessage')[0].childNodes[0].nodeValue
}