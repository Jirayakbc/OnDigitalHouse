


// const nome = document.querySelector("#titulo");
// // const tituloNome = String(nome.value)
// const descricao = document.querySelector("#descricao").value;
// const url = document.querySelector("#imagem").value;

const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event) {
   event.preventDefault()
})

// const dados ={
//     titulo: nome,
//     descric: descricao,
//     urlImagem: url
// };

//funcao onclick que vai ativar as postagens

function enviar(){
    const nome = document.querySelector("#titulo").value;
    const descricao = document.querySelector("#descricao").value;
    const foto = document.querySelector("#imagem").value;
    let dados = {
        titulo: nome,
        descricao: descricao,
        foto: imagem.value,
        
    }
    console.log(foto)

    alert('Você clicou')

    console.log(dados)

    // let post = dados;
    // post.titulo = document.getElementsByTagName('h1').innerHTML;
    // post.descricao = document.getElementsByTagName('p').innerHTML;
    // post.foto = document.getElementsByTagName('img').innerHTML;

    function insere(){
        var fotografia = document.getElementsByClassName('img')
     fotografia.setAttribute('src', dados.foto);
    }
    insere()
}


// //funcao de adicionar postagens


// var input = document.querySelector("#name");

// var texto = input.value;



