//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

var main = document.querySelector("#tarjeta");

main.setAttribute("class", "card");


//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

var imagem = document.querySelector("#logo");

imagem.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");

//3- Quitarle al titulo la clase que le está dando un formato feo

var titulo = document.querySelector(".titulo-feo");

titulo.removeAttribute("class");

//4- Chequear si el link a youtube posee o no el atributo href

var video = document.querySelector("#link_youtube");

video.getAttribute("href");
// alert(video); //opcao direto na tela comentada pois não foi solicitada
//console.log(video); //opcao avancada para o console da página, comentada pois não foi soliictada

//5- Obtener el href del link a wikipedia y mostrarlo por consola

var wiki = document.querySelector("#link_wikipedia");
wiki.getAttribute("href")
// alert(wiki)//opcao direto na tela
console.log(wiki)//opcao avancada para o console da página

let rodape = document.querySelector("#ex");
rodape.style.color="white"
rodape.style.backgroundColor="black"
rodape.style.padding="15px"
rodape.style.textAlign="center"

