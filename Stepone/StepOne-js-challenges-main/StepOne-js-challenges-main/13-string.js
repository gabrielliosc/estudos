// Escreva uma função que converte o nome para iniciais. 
// Por exemplo, se eu passar o nome João e sobrenome Viana, a função deve retornar J.V.

// O retorno deve ser duas letras maiúsculas, seguidas de um ponto.

// Outros exemplos:
// `Maria Silva` => `M.S.`
// `Pedro Pedroso`  => `P.P`

function abbrevName(firstName, lastName){
	
	firstName = firstName.toUpperCase()
	lastName = lastName.toUpperCase()

	const abrev = `${firstName[0]}.${lastName.slice[0]}.`

	return abrev;
}

console.log(abbrevName('naria','yerese'))