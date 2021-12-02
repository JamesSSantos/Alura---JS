const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "James";

console.log(texto1);
console.log(texto2);
console.log(senha)
console.log(StringDeNumeros);
console.log(citacao);
console.log(citacao + meuNome);

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

// JavaScript, ambos os dados são apenas sequências de caracteres, e a comparação vai falhar, pois como já vimos, o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.
console.log(cidade === input); // false

//Uma das formas de tratar isso é padronizando todos os inputs para o formato de texto que será comparado antes mesmo de fazer a comparação. Nesse caso, transformando todos os caracteres em letras minúsculas.

const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo); // true

//length pode ser utilizada para sabermos quantos caracteres uma string contém:
console.log(senha.length) // 20 caracteres