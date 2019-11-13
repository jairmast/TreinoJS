const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1,peso2)
console.log(Number.isInteger(peso1))// Para ver se é um valor inteiro 
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))//Delimitar o numero de casa decimais 
console.log(media.toString())//Retorna o valor como string
console.log(media.toString(2))//Se eu quiser retorna o numero binario 
console.log(typeof media)
console.log(typeof Number)
