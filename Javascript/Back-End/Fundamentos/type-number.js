// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const resultado = (primeiroNumero - segundoNumero) * meuNumero;

console.log(resultado);

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novoResultado = primeiroNumero / numeroPontoFlutuante

console.log(novoResultado);

// NaN -> Not A Number (Não é um número)

const alura = "Alura";
console.log(alura * primeiroNumero);

const idade = 28
const pi = 3.14

// outra forma de obter o PI.
const teste = Math.PI;

console.log(teste + pi)

/*Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.*/

var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN

// ordenação

var lista = [10,1,5,9,8,12,15,67,5,-5];

function comparaNumeros(a,b) { 
    if (a == b) 
        return 0; 
    if (a < b) 
        return -1; 
    if (a > b) 
        return 1; 
}
lista.sort(comparaNumeros);
console.log(lista);

// Outra forma de fazer ordenação.

lista = [25,0,-6,11,29,1,7,3];

lista.sort((a,b) => a - b);
console.log(lista)

function ganhoPorHora(salario, horasTrabalhadasNoMes){

    const salarioHora = (salario / horasTrabalhadasNoMes);

    return salarioHora;
}

var salario = ganhoPorHora(3000, 176);

console.log(salario);