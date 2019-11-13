const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))//Ele n acha
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('C'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")//Mesmo resultado 
console.log(escola.replace(/\d/,'e'))//substitui todos os numero por 'e'
console.log(escola.replace(/\w/g,'e'))// substitui letras e numeros por 'e'

console.log('Ana,Maria,Pedro'.split(','))// gerar um aray usando a virgula com separador 