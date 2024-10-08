document.addEventListener("DOMContentLoaded", function(){
a = 0;

document.querySelector("header .last").onclick= function(){

    a++;

    if(a == 1){
        document.getElementById("articolo1").classList.remove("visibile")
        document.getElementById("articolo2").classList.add("visibile")
    }
    if(a == 2){
        document.getElementById("articolo2").classList.remove("visibile");
        document.getElementById("articolo3").classList.add("visibile");

    }
    if(a == 3){
        document.getElementById("articolo3").classList.remove("visibile");
        document.getElementById("articolo1").classList.add("visibile");
        a= 0;
    }
}


    document.getElementById("conta1").onclick=function(){
    
        let Testo = document.querySelector(".visibile").innerText;
        //console.log(Testo);

        let Totalecaratteri = Testo.length;
        //console.log(Totalecaratteri);

        document.getElementById("caratteri").innerHTML = Totalecaratteri;
    
    }


    document.getElementById("conta2").onclick=function(){
        
        let Testo = document.querySelector(".visibile").innerText;
        //console.log(Testo);

        let parole = Testo.split(/\s+/);
        //console.log(parole);

        let Totaleparole = parole.length;
        //console.log(Totaleparole);

        document.getElementById("parole").innerHTML= Totaleparole;

   }


   document.getElementById("conta3").onclick=function(){

    let paragrafi= document.querySelectorAll(".visibile p");
    let totaleparagrafi = paragrafi.length
    //console.log(paragrafi);
    //console.log(totaleparagrafi);

    let titoli1= document.querySelectorAll(".visibile h1");
    let totaletitoli1 = titoli1.length;
    //console.log(titoli1);
    //console.log(totaletitoli1);

    let titoli2 = document.querySelectorAll(".visibile h2");
    let totaletitoli2 = titoli2.length;
    //console.log(titoli2);
    //console.log(totaletitoli2);


    document.getElementById("som").innerHTML = totaleparagrafi + totaletitoli1 + totaletitoli2;
    
   }
    
   document.getElementById("conta4").onclick=function(){

    let testo = document.querySelector(".visibile").textContent.toLowerCase();
    let conteggioVocaliA = 0;
    let conteggioVocaliE = 0;
    let conteggioVocaliI = 0;
    let conteggioVocaliO = 0;
    let conteggioVocaliU = 0;

    for (let i = 0; i < testo.length; i++) {
        let carattere = testo.charAt(i);
        
        if (carattere === 'a') {
            conteggioVocaliA++;
            //console.log(conteggioVocaliA);
            document.getElementById("vocali").innerHTML = conteggioVocaliA;
        } 
        else if (carattere === 'e') {
            conteggioVocaliE++;
           //console.log(conteggioVocaliE);
            document.getElementById("vocali").innerHTML = conteggioVocaliE;
        } 
        else if (carattere === 'i') {
            conteggioVocaliI++;
          // console.log(conteggioVocaliI);
            document.getElementById("vocali").innerHTML = conteggioVocaliI;
        } 
        else if (carattere === 'o') {
            conteggioVocaliO++;
         // console.log(conteggioVocaliO);
            document.getElementById("vocali").innerHTML = conteggioVocaliO;
        } 
        else if (carattere === 'u') {
            conteggioVocaliU++;
          //console.log(conteggioVocaliU);
            document.getElementById("vocali").innerHTML = conteggioVocaliU;
        }

        
        let Totalevocali =  document.getElementById("vocali").innerHTML = conteggioVocaliA+conteggioVocaliE+conteggioVocaliI+conteggioVocaliO+conteggioVocaliU;
        console.log(Totalevocali);
    
   
   }


   }





})