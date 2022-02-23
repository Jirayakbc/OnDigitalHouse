// jogada da maquina automatizada

let jogadas = 0;
let pont1   = 0;
let pont2   = 0;



while (pont1 < 3 || pont2 < 3){
    let maquina = parseInt(Math.random()*3+1)
    let jogada = prompt("Escolha 1-Pedra, 2- Tesoura ou 3- papel")

    
    if (maquina == 1 && jogada == 1){
        console.log("Empate, ambos escolheram pedra")

        jogadas = jogadas +1
    }if (maquina == 2 && jogada == 2){
        console.log("Empate, ambos escolheram tesoura")

        jogadas = jogadas +1
    }if (maquina == 3 && jogada == 3){
        console.log("Empate, ambos escolheram papel")

    }if (maquina == 1 && jogada == 2){
        console.log("Máquina escolheu 1-Pedra e você 2-Tesoura")

        jogadas = jogadas +1
    }if (maquina ==1 && jogada ==3){
        console.log("Máquina escolheu 1-Pedra e você  3-Papel")
        pont2 = pont2 +1

    }if (maquina ==2 && jogada ==1){
        console.log("Máquina escolheu 2-Tesoura e você 1-Pedra")
        pont2 = pont2 +1
    }
console.log(`Pontuação1: Você fez ${pont1} pontos e a máquina fez ${pont2} pontos`)
}

    




// switch (jogada) {
//     case 1:
//         switch (maquina) {
//             case 1:
                
//                 break;
//             case 2:
                
//                  break;
//             case 3:
                
//                 break;

//         }
//         break;
//     case 2:
//         switch (maquina) {
//             case 1:
                
//                 break;
//             case 2:
                
//                  break;
//             case 3:
                
//                 break;
//         break;
//     case 3:
//         switch (maquina) {
//             case 1:
                
//                 break;
//             case 2:
                
//                  break;
//             case 3:
                
//                 break;
//         break;   

//     default:
//         console.log("Escolha inválida!")
//         break;
// }



   

