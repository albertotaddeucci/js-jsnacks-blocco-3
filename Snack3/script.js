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


const arrayNum = [0,1,2,3,4,5,6,7,8,9] ;

console.log(arrayNum)

console.log(sliceArray(arrayNum,2,4))




function sliceArray(array,min,max){
    
    return array.slice(min,max+1);
}



