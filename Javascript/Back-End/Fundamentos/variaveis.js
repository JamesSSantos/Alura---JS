//var
//Vantagem da var, podemos usar antes de declarar.
//mas por padrão, declarar sempre juntos e não separados.

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;

// console.log(area);
// var area;

//let
//let como o var permite acesso a variavel somente se não estiver em algum bloco de codico, como  if, metodos entre outros pois ela não consegue acessar se não sestiver no mesmo bloco.

// let forma = 'retângulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) /2;
// }

// console.log(area);

//const
// const quando declarada é um valor fixo, não tera o valor alterado.

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

// quando o valor precisa mudar, usar let, e quando não precisa alterar valor, por padrão é const.