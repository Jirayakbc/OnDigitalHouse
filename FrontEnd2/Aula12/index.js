let inputReference = document.querySelector('input')
let buttonReference = document.querySelector('button')



buttonReference.addEventListener('click', function(){

    let usuarioObjeto = {
        nome: inputReference.value,
        idade: 2
    }

    localStorage.setItem('dados', JSON.stringify(usuarioObjeto))
    location.href='./home.html'
})