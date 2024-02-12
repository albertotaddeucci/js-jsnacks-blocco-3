/**

Scrivi una funzione che fonda due array presi come parametri 
(date per scontato che abbiano lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro

*/

const array1 = [1,2,3,4,5];

const array2 = ["a","b","c","d","e"];

const array3 = [];


for(i=0;i<array1.length;i++){
    array3.push(array1[i])
    array3.push(array2[i])

}

console.log(array3)



