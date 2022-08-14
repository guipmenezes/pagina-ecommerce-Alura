import { productService } from "../service/product-service.js"

const mostraProdutos = (image, nome, preco) => {
    const linhaMostraProduto = document.createElement('div')
    const conteudo = `
        <div class="product--container">
            <img class="product-img" src="${image}">
            <h3 class="product-title">${nome}</h3>
            <h4 class="product-price">${preco}</h4>
            <button class="product-button">Ver produto</button>
        </div>
    `
    linhaMostraProduto.innerHTML = conteudo
    return linhaMostraProduto
}

const produto = document.querySelector('[data-produto]')

const render = async () => {
    try{
        const produtos = await productService.listaProdutos()
        produtos.forEach(elemento => {
            produto.appendChild(mostraProdutos(elemento.image, elemento.nome, elemento.preco))
        })
    }
    catch(erro){
        console.log(erro)
    }
}

render()