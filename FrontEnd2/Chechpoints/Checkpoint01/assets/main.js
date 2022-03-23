//funcao atalho select id
function selecionarId(id){
    return document.getElementById(id);
}

//funcao que confere se os campos estão com vazios ou sem espaco
function vazio(input){
    return input.value.trim() === "";
}

// funcao que envia mensagem de erro 
function mensagemErro(mensagem){
    listaErroUL.innerHTML += "<li>" + mensagem + "</li>"
}

//variavel que vai buscar o campo onde jogar os erros no form
let listaErroUL = document.querySelector('.erros ul');

//variavel que busca o formulario
let formulario = document.querySelector("form");



//manipulando as acoes do formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault() 
    
    //zerando lista de erros para não ficar gerando várias, uma em cima de outra
    listaErroUL.innerHTML="";
    
    //inserida a funcionalidade exibir ou não os erros dos campos
    let exib = document.getElementById('erros');
    exib.getAttribute('hidden')
    
    if(vazio(titulo)){
        exib.removeAttribute('hidden')
        mensagemErro("Campo Titulo nao preenchido")
    }
    if (vazio(descricao)){
        exib.removeAttribute('hidden')
        listaErroUL.innerHTML += "<li>Campo descrição não preenchido</li>"
    }
    if(vazio(imagem)){
        exib.removeAttribute('hidden')
        listaErroUL.innerHTML += "<li>Campo link da foto nao preenchido</li>"
    }
    if(!vazio(titulo) && !vazio(descricao) && !vazio(imagem)){

        //funcao para inserir os campos do formulário abaixo na disposição correta
        function insere(){

            //necessário criar uma div para colocar os elementos dentro e organizar o layout
            let dive = document.createElement('div');
            dive.setAttribute('class', 'post-card')
            document.getElementById('organiza-post').appendChild(dive);

            //inserindo os campos do formulário item a item dentro da div recem criada
            let posts = document.getElementById("organiza-post").appendChild(dive);

            //inserção dos elementos na grid por ordem de img, titulo e descricao
            posts.innerHTML += [`<img src=${imagem.value} > </img>`];
            posts.innerHTML += `<h2>${titulo.value}</h2>`;
            posts.innerHTML += `<p>${descricao.value}</p>`;   


        }

        //chamando a função de inserção e voltando a ocultar a div de erros
        insere()
        exib.setAttribute('hidden', 'true') 
    }
    
    //impede de atualizar a página ao clicar no submit, evitando a funcao original do submit
   event.preventDefault()   
   
})

    
