const listaProdutos = () => fetch(`http://localhost:3000/product`).then(resposta => resposta.json())

//O projeto usa o JSON.server, necessário colocar a instrução no git

const criaProduto = (nome, image, preco, section, description) => {
    return fetch(`http://localhost:3000/product`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            image: image,
            nome: nome,
            preco: preco,
            section: section,
            description: description
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error("Não foi possível criar o produto.")
    })
}

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: 'DELETE'
    })
}

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/product/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

const atualizaProduto = (id, image, nome, preco, section, description) => {
    return fetch(`http://localhost:3000/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            image: image,
            nome: nome,
            preco: preco,
            section: section,
            description: description
        })
    })
    .then(resposta => {
        return resposta.json()
    })
}

export const productService = {
    listaProdutos,
    criaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
}