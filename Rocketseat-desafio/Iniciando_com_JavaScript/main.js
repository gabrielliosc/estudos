//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

//2.Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let num1 = 30
let num2 = 150
alert(`A soma dos dois números: ${num1 + num2}`);

//3.Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let variable = '10'
if (typeof(variable) == 'number' ){
    alert('É um número')
} else {
    alert('Não é um número')
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let variable_ = '10'
if (typeof(variable_) == 'string' ){
    alert('É um string')
} else {
    alert('Não é um string')
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let variable__ = true
if (typeof(variable__) == 'boolean' ){
    alert('É um booleano')
} else {
    alert('Não é um booleano')
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let numA = 230
let numB = 150
alert(`A subtração dos dois números: ${numA - numB}`);

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let num1A = 230
let num2B = 150
alert(`A multiplicação dos dois números: ${num1A * num2B}`);

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let numA1 = 230
let numB2 = 150
alert(`A divisão dos dois números: ${numA1 / numB2}`);

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let number = 31
if (number % 2 === 0){
    alert('É um número par');
} else {
    alert('Não é um número par');
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let number2 = 31
if (number2 % 2 !== 0){
    alert('É um número ímpar');
} else {
    alert('Não é um número ímpar');
}