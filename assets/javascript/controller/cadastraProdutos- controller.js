import { productService } from "../service/product-service.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const image = document.querySelector('[data-img]').value
    const nome = document.querySelector('[data-name]').value
    const preco = document.querySelector('[data-price]').value
    const section = document.querySelector('[data-ctg]').value
    const description = document.querySelector('[data-description]').value

    productService.criaProduto(nome, image, preco, section, description).then(resposta => {
        window.location.href = '../html/all-products.html'
    })
})