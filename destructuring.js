const pessoa = {
    nome : 'pedro',
    idade : 32 ,
    peso : 90 , 
    endereco :{
        lougradoro:'Rua muito legal',
        numero : 125 
    }
}

const {nome , idade } = pessoa
console.log(nome , idade)

const{nome : n , idade : i,peso:j} = pessoa 
console.log(n , i, j)

const {sobrenome , bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)
var x = i + j
 console.log(x)

const {endereco : {lougradoro : p, numero : l}} = pessoa
console.log(p,l)