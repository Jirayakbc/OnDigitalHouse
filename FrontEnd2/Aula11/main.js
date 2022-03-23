let form = document.querySelector('form');
let nom = document.getElementById('nome');
let sobrenom = document.getElementById('sobrenome');
let dados ={};

form.addEventListener("submit", function(event) {

    dados={
        nome: nom.value,
        sobrenome: sobrenom.value
    }

    let postagens = document.getElementById('saidas')
    postagens.innerHTML += `<h1>Trim:</h1>`
    postagens.innerHTML += `<h4>Nome: ${dados.nome.trim()}</h4>`
    postagens.innerHTML += `<h4>Sobrenome: ${dados.sobrenome.trim()}</h4>`
    postagens.innerHTML += `<h1>UpperCase:</h1>`
    postagens.innerHTML += `<h4>Nome: ${dados.nome.toUpperCase()}</h4>`
    postagens.innerHTML += `<h4>Sobrenome: ${dados.sobrenome.toUpperCase()}</h4>`
    postagens.innerHTML += `<h1>LowerCase:</h1>`
    postagens.innerHTML += `<h4>Nome: ${dados.nome.toLowerCase()}</h4>`
    postagens.innerHTML += `<h4>Sobrenome: ${dados.sobrenome.toLowerCase()}</h4>`
    postagens.innerHTML += `<h1>Concatenados:</h1>`
    postagens.innerHTML += `<h4>Nome Completo: ${dados.nome} ${dados.sobrenome}</h4>`
    postagens.innerHTML += `<h3>Replace 'a' para '@' + 'e' para '3', acrescentado verificador de upper ou lowercase:</h3>`
    postagens.innerHTML += `<h4>Nome: ${dados.nome.replace(/a/gi, "@").replace(/e/gi, "3")}</h4>`
    postagens.innerHTML += `<h4>Sobrenome: ${dados.sobrenome.replace(/a/gi, "@").replace(/e/gi, "3")}</h4>`



    event.preventDefault()
 })
 
