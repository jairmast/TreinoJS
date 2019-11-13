let valor //nao inicializada 
console.log(valor)
//console.log(valor2) nao foi definido 

valor = null // ausencia de valor 
console.log(valor)
//console.log(valor.toString()) n pode acessar uma variavel q estar nula 


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //evitar atribuir undefined 
console.log(!!produto.preco)
//delete produto.preco // se vc quiser tirar um atributo de um objeto
console.log(produto)

produto.preco = null // esse produto esta sem preço 
console.log(!!produto.preco)
console.log(produto)

