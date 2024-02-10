// O menor número. Crie uma função que recebe um array de números como parâmetro 
// de entrada e retorna o menor número do array.

const exampleArray = [-2, 0, 5, 9, 120, -60];

function smallestNumber(array) {
    let smaller;
    for (i=0;i<=array.length;i++){
        if (i==0){
            smaller = array[0];
        } else if(array[i] < smaller){
            smaller = array[i]
        }
    }
    return smaller;
}




// ________________________ TEST ________________________
console.log('TESTS:')
if(smallestNumber(exampleArray) == -60) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________