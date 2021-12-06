//declaracao de funcao
function minhaFuncao(params){
    //bloco de codigo
}

minhaFuncao('params');

//expressão de função.

const soma = function(num1, num2) {return num1 + num2};

console.log(soma(5,5));

//diferença principal: Hoisting

//funções e var são "listadas" no topo do arquivo, o resto é lido linha a linha.
console.log(apresentar())

function apresentar(){
    return 'olá.'
}

console.log(multiplica(5,5))
const multiplica = function(num1, num2){return num1 * num2};