
const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event) {
   event.preventDefault()
})


function enviar(){
    const nome = document.querySelector("#titulo").value;
    const descricao = document.querySelector("#descricao").value;
    const foto = document.querySelector("#imagem").value;
    let dados = {
        titulo: nome,
        descricao: descricao,
        foto: imagem.value,
        
    }

    alert('Confirma envio')
//refeita inserção, está incluindo mas a imagem src não inclui, ele só altera a ultima
    function insere(){
        let posts = document.getElementById('postagem');
        posts.innerHTML += `<h2>${dados.titulo}</h2>`
        posts.innerHTML += `<p>${dados.descricao}</p>`
        posts.innerHTML += `<img></img>`
        let img = document.querySelector('img');
        img.src = `${dados.foto}`
        posts.innerHTML += img.src = "hackanm.gif";
    }
    insere()


}
