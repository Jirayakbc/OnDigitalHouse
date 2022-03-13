//criado botão para ativar modo escuro

var botao = document.createElement("button");

var texto = document.createTextNode("Modo Escuro");

botao.appendChild(texto)

document.body.appendChild(botao)

//acrescentar evento onclick da funcao darkmode no button e classe btn

 var classe = document.querySelector("button")

 classe.setAttribute("id", "btn")
 classe.setAttribute("onClick", "darkMode()")

 //funcao para ativar modo escuro
 const clica = document.getElementById('btn')

 function darkMode() {
     var bod = document.body
     bod.classList.toggle("dark-body")
    //  var tit = document.getElementById("titulo")
    //  tit.classList.toggle("dark-titulo")
    //  var itens = document.getElementsByClassName("item")
    //  itens.classList.toggle("item-dark")
  
 }

 //colocar ID no título, item e item do h2 para buscar via funcao darkMode
 var idTitulo = document.querySelector("h1");

 idTitulo.setAttribute("id", "titulo");


 let numb = document.getElementsByClassName('container')
 numb.childNodes[1].style.backgroundColor ="black"


// var titulodois = document.querySelector(".container")
// console.log(titulodois)

// titulodois = h2.setAttribute("class", "teste")

// console.log(titulodois)