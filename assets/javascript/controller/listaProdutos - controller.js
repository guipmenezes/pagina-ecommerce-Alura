import { productService } from "../service/product-service.js"

const criaNovoProduto = (image, nome, preco, id) => {
    const linhaNovoProduto = document.createElement('div')
    const conteudo = `
        <div class="product--container">
            <img class="product-img" src="${image}">
            <h3 class="product-title">${nome}</h3>
            <h4 class="product-price">R$ ${preco}</h4>
            <p class="product-tag">#${id}</p>
            <a href="./edit-product.html?id=${id}"><button class="product-edit">editar</button></a>
            <button class="product-delete">deletar</button>
        </div>
`

    linhaNovoProduto.innerHTML = conteudo
    linhaNovoProduto.dataset.id = id
    return linhaNovoProduto
}

const produto = document.querySelector('[data-produto]')
produto.addEventListener('click', async (evento)=> {
    let seBotaoDeletar = evento.target.className == 'product-delete'
    if(seBotaoDeletar) {
        const linhaProduto = evento.target.closest('[data-id]')
        let id = linhaProduto.dataset.id
         await productService.removeProduto(id)
            linhaProduto.remove()
    }
})

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