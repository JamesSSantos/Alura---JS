const nome = 'James';
const idade = 2021 - 1992;
const maiorDeIdade = 'Whisky';
const menorDeIdade = 'Coca-Cola';

const pedido = `${nome} chega ao atendente do bar e diz: "Boa noite, gostaria de um copo de ${idade >= 18 ? maiorDeIdade : menorDeIdade}."`;

console.log(pedido);