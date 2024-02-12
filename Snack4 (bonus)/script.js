/**

Scrivi una funzione  che accetti una stringa come parametro 
e restituisca la stringa con i caratteri ordinati alfabeticamente
*/


const buttonStart = document.getElementById("button-start");

buttonStart.addEventListener("click",function(){
    const resultElement =  document.getElementById("result");
    resultElement.innerText = ""
    
    const inputText = document.getElementById("input-text").value;
    const array = sorting(inputText);

    for(i=0;i<array.length;i++){
    
       resultElement.innerText += array[i]
    
    }

})



//funzione per ordinare alfabeticamente della stringa (in array)
function sorting(str){
    const array = [];
    for(i=0;i<str.length;i++){
        array.push(str[i]);
    }
        
    const strSorted = array.sort();
    return strSorted;
}

