//parametros de função

function soma(numero1, numero2){
    return numero1 + numero2
}

console.log(soma(2,2));
console.log(soma(245,27));
console.log(soma(-500, 60));

//parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, minha idade é ${idade}`;
}

console.log(nomeIdade(19, 'Thomas'));

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(7,9), soma(1,4)));

function multiplicaDefinidos(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplicaDefinidos(soma(4,9)))

function comprimentar(){
    //se usar o console.log, ele retorna undefined antes do 'Meu nome é...'
    return 'Oi pessoal, tudo bem ?\n';
}

function comprimentaPessoa(nomePessoa){
    console.log(`${comprimentar()} Meu nome é ${nomePessoa}, prazer em conhecer todos vocês !`);
}

comprimentaPessoa('James');