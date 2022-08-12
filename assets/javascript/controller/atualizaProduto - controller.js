import { productService } from "../service/product-service.js"

const guardaURL = new URL(window.location)

const id = guardaURL.searchParams.get('id')

const inputImage = document.querySelector('[data-image]')
const inputNome = document.querySelector('[data-nome]')
const inputPreco = document.querySelector('[data-preco]')
const inputSection = document.querySelector('[data-category]')
const inputDescription = document.querySelector('[data-desc]')

productService.detalhaProduto(id)
.then(dados => {
    inputImage.value = dados.image
    inputNome.value = dados.nome
    inputPreco.value = dados.preco
    inputSection.value = dados.section
    inputDescription.value = dados.description
})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    productService.atualizaProduto(id, inputImage.value, inputNome.value, inputPreco.value, inputSection.value, inputDescription.value)
    .then(()=> {
        window.location.href = './all-products.html'
    })
})