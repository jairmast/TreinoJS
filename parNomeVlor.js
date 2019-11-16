const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome : 'pedro',
    idade : 32 ,
    peso : 90 , 
    endereco :{
        lougradoro:'Rua muito legal',
        numero : 125 
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente.idade)
console.log(cliente.endereco.numero)