import { validaIndex } from './validationForm.js';

const inputs = document.querySelectorAll('input')
const textos = document.querySelectorAll('textarea')

inputs.forEach(input => {
    input.addEventListener('blur', evento => {
        validaIndex(evento.target)
    })
})

textos.forEach(input => {
    input.addEventListener('blur', evento => {
        validaIndex(evento.target)
    })
})