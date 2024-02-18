let estudantes = [{
    'nome': 'Diego',
    'Nota1': 10,
    'Nota2': 8
},{
    'nome': 'João',
    'Nota1': 10,
    'Nota2': 2
},{
    'nome': 'Letícia',
    'Nota1': 6,
    'Nota2': 5
}]

function media(a, b) {
    const soma = a + b

    return soma/2
}
function avaliacao(nome, nota1, nota2){

    const media_final = media(nota1,nota2) 

    if ( media_final >= 7){
        alert(`A média do(a) aluno(a) ${nome} é: ${media_final} \n Parabéns, ${nome}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`A média do(a) aluno(a) ${nome} é: ${media_final} \n Não foi dessa vez, ${nome}! Tente novamente!`)
    }
}
estudantes.forEach( estudante => avaliacao(estudante.nome, estudante.Nota1, estudante.Nota2)
)