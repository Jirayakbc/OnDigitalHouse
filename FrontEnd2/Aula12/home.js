let nomeReferencia = document.querySelector('b')
let dadosUsuario = JSON.parse(localStorage.getItem('dados'))


nomeReferencia.innerHTML = dadosUsuario.nome