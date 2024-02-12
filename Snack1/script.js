/**

Scrivi una funzione che accetti una stringa come argomento e la restituisca girata

*/


const inputElement = document.getElementById("input-text").value;
const buttonStart = document.getElementById("button-start");




function invert(text) {
    let invertedString = "";
    
    for(i=text.length - 1; i>=0; i--){
        invertedString =+ text[i];
    }

    return invertedString;
    
    
}


console.log(invert("cane"))


