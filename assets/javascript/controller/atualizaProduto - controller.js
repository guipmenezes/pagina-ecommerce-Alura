import { productService } from "../service/product-service.js"

( async ()=> {
    const guardaURL = new URL(window.location)

    const id = guardaURL.searchParams.get('id')
    console.log(id)

    const inputImage = document.querySelector('[data-image]')
    const inputNome = document.querySelector('[data-nome]')
    const inputPreco = document.querySelector('[data-preco]')
    const inputSection = document.querySelector('[data-category]')
    const inputDescription = document.querySelector('[data-desc]')

    const dados = await productService.detalhaProduto(id)
        inputImage.value = dados.image
        inputNome.value = dados.nome
        inputPreco.value = dados.preco
        inputSection.value = dados.section
        inputDescription.value = dados.description

    const formulario = document.querySelector('[data-formulario]')

    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        await productService.atualizaProduto(id, inputImage.value, inputNome.value, inputPreco.value, inputSection.value, inputDescription.value)
            window.location.href = '../html/all-products.html'
    }) 
})()