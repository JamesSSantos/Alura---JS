const idadeMinima = 18;
const idadeCLiente = 19;

if(idadeCLiente >= idadeMinima){
    console.log("Cerveja!");
} else {
    console.log("Suco!");
}
            // condição                    //true       //false    
console.log(idadeCLiente >= idadeMinima ? "Cerveja !" : "Suco !");
// a boa pratica é usar o ternario somente se for saidas curtas.