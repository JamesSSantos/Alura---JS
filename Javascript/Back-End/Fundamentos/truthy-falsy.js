//boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 equivale a false
// 1 equivale a true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)


//null representa vazio ou nada, null é um tipo de dado, null é um objeto no javascript;
//undefined quase igual a null, o espaço está guardado na memória mas não tem valor nela.

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);