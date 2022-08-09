export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container-invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = ' '
    } else {
        input.parentElement.classList.add('input-container-invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing',
    'tooLong'
]

const mensagensDeErro = {
    nome: {
        tooLong: 'O máximo de caracteres foi atingido.',
        valueMissing: 'É necessário preenchimento deste campo'
    },
    escreva: {
        tooLong: 'O máximo de caracteres foi atingido.',
        valueMissing: 'É necessário preenchimento deste campo'
    }
    
}

const validadores = {
    nome:input => validaNome(input),
    escreva:input => validaMensagem(input)
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    return mensagem
}

function validaNome(input) {
    const nome = input.value
    let mensagem = ''

    if(nome > 40) {
        return mostraMensagemDeErro(nome, tooLong);
    } else {
        return mensagem;
    }
}

function validaMensagem(input) {
    const escreva = input.value
    let mensagem = ''

    if(escreva > 120) {
        mensagem = 'A mensagem que deseja enviar deve ter menos de 120 caracteres.'
    }
}