export function vailda(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid')
        input.parentElement.querySelector('')
    } else {
        input.parentElement.classList.add('input-container--invalid')
    }
}

const mensagensDeErro = {
    nome: {
        tooLong: 'O máximo de caracteres foi atingido.',
        valueMissing: 'É necessário preenchimento deste campo'
    },
    mensagem: {
        tooLong: 'O máximo de caracteres foi atingido.',
        valueMissing: 'É necessário preenchimento deste campo'
    }
    
}

const validadores = {
    
}