const prompt = require("prompt-sync")();

function ope(x , y){
   let soma 
   let subitatração
   let multiplicação
   let divisao
    let calculo = prompt(String("digite o que deseja calcular "))
    if (calculo == "soma"){
        return  soma = x + y 
    }else if ( calculo == "subitração"){
        return  subitatração = x - y
    }else if ( calculo == "divisão"){
        return  divisao = x / y
    }else if( calculo == "multiplicação"){
       return  multiplicação = x * y
    }

}
let x = ope(prompt("difgite um numero"))
let y = ope(prompt("digite um numero"))
console.log(x)