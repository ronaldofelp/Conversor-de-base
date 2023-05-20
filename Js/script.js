

var numero1 = document.querySelector('#numero1');
var numero2 = document.querySelector('#numero2');
var camporesultado = document.querySelector('.resultado');



function mostrarResultado (resultado){
    
    if(isNaN(resultado)){
        alert("Valores inseridos são invalidos. Por favor, digite novamente.")
    }else{camporesultado.innerHTML = `O resultado da conta é: ${resultado}`
}

    

}


function somar(){

    var soma = parseFloat(numero1.value) + parseFloat(numero2.value);
    return mostrarResultado(soma)
    
}

function subtrair(){
    var  subtracao = parseFloat(numero1.value) - parseFloat(numero2.value);
    
    return mostrarResultado(subtracao)
}

function dividir(){

    if(numero2.value != 0){
        var  divisao = parseFloat(numero1.value) / parseFloat(numero2.value);
        return mostrarResultado(divisao)

    }else{
        alert("Não é possível efetuar a divisão por zero")
    }  
}


function multiplicar(){
    var  multiplicacao = parseFloat(numero1.value) * parseFloat(numero2.value);
    return mostrarResultado(multiplicacao)
}