//Criando a Classe Satck
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }


    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;

        const result = this.items[this.count];
        delete this.items[this.count];
        return result;

    }

}

const showResult = document.querySelector('.showResult');
const result = document.createElement('span');


//função responsável por converter a base


function baseConverter(decNumber, base) {

    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';


    let number = decNumber;
    let rem;
    let baseString = '';

    if (!(base >= 2 && base <= 36)) {
        return '';
    }

    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }


    creatResult(baseString)
}



showResult.addEventListener('click', () => {



    const numberUser = parseFloat(document.querySelector('#NumberDec').value);
    const baseUser = parseFloat(document.querySelector('#NumberBase').value);

    if (numberUser < 2 || (baseUser < 2)) {

        return alert("Números inválidos! Digite novamente. ");
    }

    baseConverter(numberUser, baseUser);

})

function creatResult (str) {
    const container = document.querySelector('.container');
    
    result.classList.add('result');
    result.textContent = str;
    container.appendChild(result);
    
    return container;
}