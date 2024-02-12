/**

Scrivi una funzione che accetti tre argomenti:
un array e due numeri 
(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).


abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
La nostra funzione viene dichiarata ad
 esempio così function tagliaArray(array, posizioneMin, posizioneMax)
La funzione ritornerà un nuovo array con i valori 
che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4)
 ci restituirebbe un array così composto:[2, 3, 4]
*/

const arrayNum = [1,2,3,4,5,6,7] ;

document.getElementById("array").innerHTML = `<b>La lista degli elementi è:</b>  ${arrayNum}`;


const buttonStart = document.getElementById("button-start");

buttonStart.addEventListener("click",function(){
    const indexMin = document.getElementById("input-min").value;
    const indexMax = document.getElementById("input-max").value;
    
    const result = sliceArray(arrayNum,indexMin,indexMax);

    document.getElementById("result").innerText = `${result}`;
    document.getElementById("result").style = "display: block";


})


//funzione per prendere parte array tra min e max compresi
function sliceArray(array,min,max){
    let error;
    if (min > max || max>array.length || min === ""|| max===""){
        return error = `Errore`;

    } else {
        return array.slice(min-1,max);

    }
    
}

