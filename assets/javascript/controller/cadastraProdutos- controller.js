import { productService } from "../service/product-service.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const image = document.querySelector('[data-image]').value
    const nome = document.querySelector('[data-nome]').value
    const preco = document.querySelector('[data-preco]').value
    const section = document.querySelector('[data-category]').value
    const description = document.querySelector('[data-desc]').value

    productService.criaProduto(nome, image, preco, section, description).then(resposta => {
        window.location.pathname = 'assets/html/all-products.html'
    })
})