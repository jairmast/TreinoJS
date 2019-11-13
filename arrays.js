const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log(valores[4])//Nao vai gerar erro maas pode gerar um efeito colateral na sua logica de programaçao 

//valores[8] = 65
//console.log(valores) ele gera 6 itens vazios no meio 
 
valores[4] = 10 
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false , null , 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)
  
console.log(typeof valores)