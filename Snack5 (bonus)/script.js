/*
Scrivi una funzione che accetti una stringa come parametro 
e restituisca la stessa stringa 
ma con le iniziali delle parole tutte in maiuscolo

*/


//funzione per parole in maiscolo
function toUpper(str){
    let upperStr;
    upperStr = str[0].toUpperCase()

    for(i=0;i<str.length-1; i++){
        

        if (str[i]===" "){
            upperStr += ` ${str[i+1].toUpperCase()}`
        } else {
            upperStr += str[i+1]
        }

               
    }

    return upperStr;

}

console.log(toUpper("nel mezzo del cammin"))
