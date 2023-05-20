
var numero1 = parseFloat(document.querySelector('#numero1').value);
var numero2 = parseFloat(document.querySelector('#numero2').value);
var camporesultado = document.querySelector('.resultado');



function mostrarResultado (resultado){

    camporesultado.innerHTML = `O resultado da conta é: ${resultado}`

}

function somar(){

    var  soma = numero1 + numero2;
    return mostrarResultado(soma)
    
}

function subtrair(){
    var  subtracao = numero1 - numero2;
    
    return mostrarResultado(subtracao)
}

function dividir(){

    if(numero2 != 0){
        var  divisao = numero1 / numero2;
        return mostrarResultado(divisao)

    }else{
        alert("Não é possível efetuar a divisão por zero")
    }  
}


function multiplicar(){
    var  multiplicacao = numero1 * numero2;
    return mostrarResultado(multiplicacao)
}