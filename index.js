// DECLARANDO AS VARIÁVEIS
let userName = getFirstName("Gustavo Roberto Grecco", " ")
let vitorias = 111
let derrotas = 10

// ORGANIZANDO AS FUNÇÕES
function getFirstName(name, splitChar){
	let firstName = name.split(splitChar)[0]
        return firstName
}

function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

// CALCULANDO O SALDO
let saldo = saldoVitorias(vitorias, derrotas)


          // ORGANIZANDO AS CONDICIONAIS
 if (saldo <= 10){
    console.log(`O Herói de nome ${userName} tem saldo de ${saldo} e está no nível de Ferro`)
              }
 else if (saldo > 10 && saldo <=20){
    console.log(`O Herói de nome ${userName} tem saldo de ${saldo} e está no nível de Bronze`)
}
 else if (saldo > 20 && saldo <=50){
    console.log(`O Herói de nome ${userName} tem saldo de ${saldo} e está no nível de Prata`)
}
 else if (saldo > 50 && saldo <=80){
    console.log(`O Herói de nome ${userName} tem saldo de ${saldo} e está no nível de Ouro`)
}
 else if (saldo > 80 && saldo <=90){
    console.log(`O Herói de nome ${userName} tem saldo de ${saldo} e está no nível de Diamante`)
}
 else if (saldo > 90 && saldo <=100){
    console.log(`O Herói de nome ${userName} tem saldo de ${saldo} e está no nível de Lendário`)
}
 else if (saldo > 100){
    console.log(`O Herói de nome ${userName} tem saldo de ${saldo} e está no nível de Imortal`)
}