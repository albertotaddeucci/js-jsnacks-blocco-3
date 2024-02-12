/**

Scrivi una funzione che fonda due array presi come parametri 
(date per scontato che abbiano lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro

*/

const array1 = [1,2,3,4,5];

const array2 = ["a","b","c","d","e"];

const array3 = [];




console.log(alternate(array1,array2))





function alternate(firstArray,secondArray){
    let arrayAlt = [];
    for(i=0;i<firstArray.length;i++){
        arrayAlt.push(firstArray[i]);
        arrayAlt.push(secondArray[i]);  
    }

    return arrayAlt;
}





