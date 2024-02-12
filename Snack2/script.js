/**

Scrivi una funzione che fonda due array presi come parametri 
(date per scontato che abbiano lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro

*/



const array1 = [];

const array2 = [];

for (i=0;i<3;i++){
    array1.push(prompt("inserisci 3 elementi per primo array"));
}

for (i=0;i<3;i++){
    array2.push(prompt("inserisci 3 elementi per secondo array"));
}

document.getElementById("result").innerText = alternate(array1,array2);

document.getElementById("array1").innerText = array1;
document.getElementById("array2").innerText = array2;



//funzione che restituisce array con elementi alternati
function alternate(firstArray,secondArray){
    let arrayAlt = [];
    for(i=0;i<firstArray.length;i++){
        arrayAlt.push(firstArray[i]);
        arrayAlt.push(secondArray[i]);  
    }

    return arrayAlt;
}





