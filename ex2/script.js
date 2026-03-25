const data = require('./dados.json')

const nomesProdutos = data.map((p)=> {
    return p.nome
})

console.log(nomesProdutos)