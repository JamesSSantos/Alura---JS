// let x = '';
// console.log(x);
// x = 'oi';

// Declaração de função.
// 1) Declara a função.
// forma mais classica.
function imprimeTexto(texto) {
    console.log(texto);
}

// 2) Executa a função (1 ou + vezes)

imprimeTexto('Oi !')
imprimeTexto('Outro texto');

// o js tem 3 formas de criar funções.

function soma(){
    //Com a const não funciona por sem um console.log ou return a função não retorna nada.
    //como o resultado é restringido dentro da function, sem um return o que é gerado fica preso.
    //const resultado = 2 + 2;
    //return tem que ser sempre a ultima linha, nada é executado apos o return.
    return 2 + 2;
}

console.log(soma());

// É possivel usar uma função dentro da outra;
imprimeTexto(soma());

let listaFuncionarios = ['James', 'Luana', 'Chico'];
let listaIdades = [29, 28, 72];

const exibeLista = (lista, descricao) => {
    e = '';
    for(let i = 0; i < lista.length; i++){
        e += '\n' + descricao + lista [i];
    }
    return e;
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, 'Idades: '))