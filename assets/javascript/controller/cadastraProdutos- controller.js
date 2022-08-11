import { productService } from "../service/product-service.js"

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const imagem = evento.target.querySelector('[data-image]').value
    const nome = evento.target.querySelector('[data-nome]').value
    const preco = evento.target.querySelector('[data-preco]').value

    productService.criaProduto(imagem, nome, preco)
    .then(()=> {
        window.location.href = '../html/all-products.html'
    })
})