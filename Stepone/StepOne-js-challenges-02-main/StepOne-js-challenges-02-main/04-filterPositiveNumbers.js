// Filtre o array. Crie uma função chamada filterArray que recebe um Array 
// de números como parâmetro de entrada. Essa função deve eliminar 
// todos os números negativos e devolver o array apenas com valores 0 
// e/ou números positivos.

// Exemplo:
// [1, -2, 0, 5, 8, -3] -> [1, 0, 5, 8]

function filterPositiveNumbers(array) {
    /* MEU
    let newArray = [];
    let j = 0;

    for(i=0;i<=array.length;i++){
        if (array[i]>=0){
            newArray[j] = array[i];
            j++
        }
    }

    return newArray;*/
    /* CORREÇÃO só uma forma diferente de fazer*/

    let positiveNumbers = [];
    

    for(i=0;i<=array.length;i++){
        if (array[i]>=0){
            positiveNumbers.push(array[i]);
            
        }
    }

    return positiveNumbers;

}


filterPositiveNumbers([1, -2, 0, 5, 8, -3]);










// ________________________ TEST ________________________
console.log('TEST:')
function compareArrays(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}
if (compareArrays(filterPositiveNumbers([1, -2, 0, 5, 8, -3]), [1, 0, 5, 8])) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________
