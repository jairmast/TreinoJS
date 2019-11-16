//Função em js é First-Class Object (Citizens)
//High Ordem Function

//criar de forma litteral 
function fun1() {}

//Armazenar dentro de uma variavel 
const fun2 = function() {}

// Armazenar dentro de um array
const array = [function (a,b) {return a+b}, fun1,fun2]
console.log(array[0](2 , 4))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro de outra funçao
function run (fun){
    fun()
}
run(function () {console.log('Executando...')})

// Uma função pode retornar / conter uma função 
function soma (a, b){
    return function (c) {
        console.log(a+b+c)
    }

}
soma(3,4)(7 )