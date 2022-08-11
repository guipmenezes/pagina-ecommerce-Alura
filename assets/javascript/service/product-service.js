const listaProdutos = () => fetch(`http://localhost:3000/product`).then(resposta => resposta.json())

//O projeto usa o JSON.server, necessário colocar a instrução no git

const criaProduto = (nome, image, preco) => {
    return fetch(`http://localhost:3000/product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image: image,
            nome: nome,
            preco: preco,
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error("Não foi possível criar o produto.")
    })
} 

export const productService = {
    listaProdutos,
    criaProduto
}