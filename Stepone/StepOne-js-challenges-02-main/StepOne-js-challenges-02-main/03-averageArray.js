// Calcular a média dos números de um array. 
// Crie uma função chamada averageArray que recebe como parâmetro de entrada 
// um array e RETORNA a média dos números do array.

// PS: Esse código roda um teste para verificar 
// se a função está funcionando corretamente!

// DICA: você vai precisar usar o length para resolver esse desafio!

const exampleArray = [23, 14, 5, 300, 2];

function averageArray(array) {

    const n = array.length;
    let sum = 0;
        
    for (let i=0;i<n;i++){
        sum = sum + array[i];
    }

    let averageArray = sum/n;
    
    return averageArray
   
}
averageArray(exampleArray)









// ________________________ TEST ________________________
console.log('TEST:')
if (averageArray(exampleArray) == 68.8) {
    console.log("✅ passed");
} else {
    console.log("❌ failed");
}
// ________________________ TEST ________________________
