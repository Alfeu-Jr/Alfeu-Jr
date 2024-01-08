var resultadoVerificacao = document.getElementById("resultado");


// Obtém o elemento de alerta toast
const toastElement = document.getElementById('toastAlerta');

// Cria uma instância do toast
const toast = bootstrap.Toast.getOrCreateInstance(toastElement);

// Função que retorna um dígito aleatório
function getRandomDigit() {
    return Math.floor(Math.random() * 10);
}

// Função que retorna um número aleatório
function getRandomNumber() {
    const digit = getRandomDigit(); // Gerar um dígito aleatório

    if (digit == 0) {
        // Gerar um número aleatório com 3 dígitos
        const number = getRandomDigit() * 100 + getRandomDigit() * 10 + getRandomDigit();
        return ("0" + number); // Retornar o número aleatório com o inicial 0
    } else {
        // Gerar um número aleatório com 4 dígitos
        return digit * 1000 + getRandomDigit() * 100 + getRandomDigit() * 10 + getRandomDigit();
    }
}

var senha = getRandomNumber();
console.log(senha);

// Função que verifica se o parâmetro é um número
function checkInput(input) {
    const regex = /^\d+$/;
    return regex.test(input);
}

// Listener do evento que verifica se a entrada do input PIN é um número e, se não, remove o último caractere
document.getElementById("pin").addEventListener("input", function (event) {
    if (!checkInput(event.target.value)) {
        event.target.value = event.target.value.slice(0, -1);
    }
});

/**
 * Função para validar um PIN.
 * @param {number} pin - O PIN a ser validado.
 * @returns {string} - Mensagem de erro correspondente ao PIN fornecido.
 */
function validar(pin) {
    var resultado;
    var metadePin = pin / 2;
    var metadeInferiorPin = metadePin;
    var metadeSuperiorPin = ((9999 - pin) / 2) + pin;

    if (senha == pin) {
        alert("Pin correto!");
        window.location.href = "pin.html";
    }
    // Verifica se o PIN está entre "0000" e a metade inferior do PIN
    else if (senha >= "0000" && senha < metadeInferiorPin) {
        resultado = "Pin incorreto. O próximo valor deve ser muito menor que o atual";
    }
    // Verifica se o PIN está entre a metade inferior e o próprio PIN
    else if (senha >= metadeInferiorPin && senha < pin) {
        resultado = "Pin incorreto. O próximo valor deve ser menor que o atual";
    }
    // Verifica se o PIN está entre o PIN e a metade superior do PIN
    else if (senha > pin && senha <= metadeSuperiorPin) {
        resultado = "Pin incorreto. O próximo valor deve ser maior que o atual";
    }
    // Verifica se o PIN está entre a metade superior do PIN e "9999"
    else if (senha > metadeSuperiorPin && senha <= 9999) {
        resultado = "Pin incorreto. O próximo valor deve ser muito maior que o atual";
    }
    return resultado;
}

// Esta função é usada para impedir a ação padrão do formulário, obtém o valor do pin, cria uma instância do toast e, em seguida, manuseie o botão Clique.
// Adiciona um Listener de evento ao formulário com o id "formPin"
document.getElementById("formPin").addEventListener("submit", function (event) {
    // Impede a ação padrão do formulário
    event.preventDefault();

    // Obtém o valor do campo de entrada "pin"
    const pin = document.getElementById("pin").value;

    // Mostra o toast
    toast.show();

    // Verifica se o comprimento do pin é igual a 4
    if (pin.length === 4) {
        // Define o texto do elemento "resultado" como o resultado da função "validar"
        resultadoVerificacao.innerText = validar(pin);
    } else {
        // Define o texto do elemento "resultado" como "Número inválido"
        resultadoVerificacao.innerText = "Número Inválido";
    }
});
