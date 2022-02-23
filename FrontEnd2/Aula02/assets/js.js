// // jogada da maquina automatizada


var pointUser, pointRobot, msg1, msgm2, msg3

pointRobot = 0
pointUser = 0
//jogada do robo
// let robo = parseInt(Math.random()*3+1)
//     switch (robo){
//         case 1:
//             msg1="Rôbo escolhe 1- Pedra"
//             break
//         case 2:
//             msg1=" Rôbo escolhe2- Papel"
//             break
//         default:
//             msg1="Rôbo escolhe 3- Tesoura"
//     }

//         //jogadas do usuario
//         let jogador = parseInt(prompt("Digite 1- Pedra, 2- Papel ou 3-Tesoura"))

//         switch(jogador){
//         case 1:
//             msg2="\n Você escolheu 1- Pedra"
//             break
//         case 2:
//             msg2="\nVocê escolheu 2- Papel"
//             break
//         case 3:
//             msg2="\nVocê escolheu 3- Tesoura"
//             break
//         default:
//             msg2="\n Valor inválido!"
    
//     }


    function contaPontos(point1, point2){
        if(point1 <2 || point2 <2){
            let robo = parseInt(Math.random()*3+1)
            switch (robo){
            case 1:
                msg1="Rôbo escolhe 1- Pedra"
                break
            case 2:
                msg1=" Rôbo escolhe2- Papel"
                break
            default:
                msg1="Rôbo escolhe 3- Tesoura"
            }
            
            //jogadas do usuario


            switch(jogador){
            case 1:
                msg2="\n Você escolheu 1- Pedra"
                break
            case 2:
                msg2="\nVocê escolheu 2- Papel"
                break
            case 3:
                msg2="\nVocê escolheu 3- Tesoura"
                break
            default:
                msg2="\n Valor inválido!"
        
        if (jogador ===1 && robo ===1 || jogador ===2 && robo ===2 || jogador ===3 && robo ===3 ){
            msg3= "Empate"
        
        }if (jogador ===1 && robo ===3 || jogador ===3 && robo === 2 || jogador ===2 && robo === 1){
            msg3="Jogador ganha rodada"
            point1 = point1 + 1
        } else {
            msg3="Robo vence rodada"
            point2 = point2 +1
        }
        
        }
    }
}



document.write(msg1)
document.write(msg2)
document.write(msgm3)
// let jogadas = 0;
// let pont1   = 0;
// let pont2   = 0;



// while (pont1 < 3 || pont2 < 3){
//     let maquina = parseInt(Math.random()*3+1)
//     let jogada = prompt("Escolha 1-Pedra, 2- Tesoura ou 3- papel")

    
//     if (maquina == 1 && jogada == 1){
//         console.log("Empate, ambos escolheram pedra")

//         jogadas = jogadas +1
//     }if (maquina == 2 && jogada == 2){
//         console.log("Empate, ambos escolheram tesoura")

//         jogadas = jogadas +1
//     }if (maquina == 3 && jogada == 3){
//         console.log("Empate, ambos escolheram papel")

//     }if (maquina == 1 && jogada == 2){
//         console.log("Máquina escolheu 1-Pedra e você 2-Tesoura")

//         jogadas = jogadas +1
//     }if (maquina ==1 && jogada ==3){
//         console.log("Máquina escolheu 1-Pedra e você  3-Papel")
//         pont2 = pont2 +1

//     }if (maquina ==2 && jogada ==1){
//         console.log("Máquina escolheu 2-Tesoura e você 1-Pedra")
//         pont2 = pont2 +1
//     }
// console.log(`Pontuação1: Você fez ${pont1} pontos e a máquina fez ${pont2} pontos`)
// }

    




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



   

