let num1 = Number(prompt('Digite o primeiro número:'));
let num2 = Number(prompt('Digite o segundo número:'));

alert(`A soma dos dois números: ${num1 + num2}`);
alert(`A subtração dos dois números: ${num1 - num2}`);
alert(`A multiplicação dos dois números: ${num1 * num2}`);
alert(`A divisão dos dois números: ${num1 / num2}`);
alert(`O resto da divisão dos dois números: ${num1 % num2}`);


if ((num1 + num2) % 2 === 0){
    alert('Soma dos dois números é par');
} else {
    alert('Soma dos dois números é ímpar');
}

if (num1 === num2){
    alert('Os dois números inseridos são iguais');
} else {
    alert('Os dois números inseridos são diferentes');
}


