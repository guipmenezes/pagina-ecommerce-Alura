import { productService } from "../service/product-service.js"

const criaNovoProduto = (image, nome, preco, id) => {
    const linhaNovoProduto = document.createElement('div')
    const conteudo = `
        <div class="product--container">
            <img class="product-img" src="${image}">
            <h3 class="product-title">${nome}</h3>
            <h4 class="product-price">${preco}</h4>
            <p class="product-tag">${id}</p>
            <button class="product-edit">editar</button>
            <button class="product-delete">deletar</button>
        </div>
`

    linhaNovoProduto.innerHTML = conteudo
    return linhaNovoProduto
}

const produto = document.querySelector('[data-produto]')
const render = async () => {
    try{
        const listaProdutos = await productService.listaProdutos()
        listaProdutos.forEach(elemento => {
            produto.appendChild(criaNovoProduto(elemento.image, elemento.nome, elemento.preco, elemento.id))
        })
    }
    catch(erro){
        console.log(erro)
    }
}

render()