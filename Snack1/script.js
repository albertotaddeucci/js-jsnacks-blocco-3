/**

Scrivi una funzione che accetti una stringa come argomento e la restituisca girata

*/


const buttonStart = document.getElementById("button-start");

buttonStart.addEventListener("click", function(){
    const inputElement = document.getElementById("input-text").value;

    invert("inputElement")

    document.getElementById("result").innerText = invert(inputElement)
});



function invert(text) {
    let invertedString = "";
    
    for(i= text.length - 1; i>=0; i--){
        invertedString += text[i];
    }

    return invertedString;
    
    
}




