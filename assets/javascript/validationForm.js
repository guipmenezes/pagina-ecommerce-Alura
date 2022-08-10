export function validaIndex(input) {
    const tipoDeInput = input.dataset.tipo

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
    'typeMismatch',
    'patternMismatch',
    'tooLong'
]

const mensagensDeErro = {
    name: {
        valueMissing: 'É necessário preenchimento deste campo',
        tooLong: 'O máximo de caracteres foi atingido.'
    },
    message: {
        valueMissing: 'É necessário preenchimento deste campo',
        tooLong: 'O máximo de caracteres foi atingido.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra minuscua e maiuscula, um número e não deve conter nenhum tipo de símbolo.'
    },
    image: {
        valueMissing: 'É necessário adicionar uma imagem para o produto.'
    },
    category: {
        valueMissing: 'É necessário adicionar uma categoria para o produto.',
        tooLong: 'O máximo de caracteres foi atingido.'
    },
    product: {
        valueMissing: 'É necessário adicionar um nome para o produto.',
        tooLong: 'O máximo de caracteres foi atingido.'
    },
    price: {
        valueMissing: 'É necessário adicionar um preço para o produto.',
        typeMismatch: 'Adicione um preço válido para o produto.'
    }
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