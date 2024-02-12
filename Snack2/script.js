/**

Scrivi una funzione che fonda due array presi come parametri 
(date per scontato che abbiano lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro

*/



const array1 = [];

const array2 = [];

const array3 = [];

for (i=0;i<5;i++){
    array1.push(prompt("inserisci un numero"));
}

for (i=0;i<5;i++){
    array2.push(prompt("inserisci una lettera"));
}

document.getElementById("result").innerText = alternate(array1,array2);




function alternate(firstArray,secondArray){
    let arrayAlt = [];
    for(i=0;i<firstArray.length;i++){
        arrayAlt.push(firstArray[i]);
        arrayAlt.push(secondArray[i]);  
    }

    return arrayAlt;
}





