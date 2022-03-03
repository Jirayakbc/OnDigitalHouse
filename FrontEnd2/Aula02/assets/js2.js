//Mesa 07: Belicio Cardoso, Felipe Rocha, Verônica Rizzi, Willian Cruz e Willian Almeida

//declaracao de variaveis de apoio
var pointUser, pointRobot, msg

//valor inicial das variaveis
pointRobot = 0
pointUser = 0
contador =0

//loop de pontuacao e rodadas, enquanto pontuacao não chegar a 2 ele não para
while (pointRobot <2 && pointUser <2){
    //chama as jogadas do robô
    let robo = parseInt(Math.random()*3+1)
    //no switch ele chama a jogada do usuário, caso seja um valor válido ele roda uma validação, senão pede um valor válido
    switch (jogador = parseInt(prompt("Digite 1- Pedra, 2- Papel ou 3-Tesoura"))){
        case 1:
        case 2:
        case 3:
            //considera empate, pontuações do robô e do jogador. Caso empate ninguém pontua. Acrescentado contador
            if (jogador ==1 && robo ==1 || jogador ==2 && robo ==2 || jogador ==3 && robo ==3 ){
                alert("Empatou")
            }if (jogador ==1 && robo ==3 || jogador ==3 && robo == 2 || jogador ==2 && robo == 1){
                alert("Jogador ganha rodada")
                pointUser = pointUser + 1
            }if(jogador ==3 && robo ==1 || jogador ==2 && robo == 3 || jogador ==1 && robo == 2){
                alert("Robo vence rodada")
                pointRobot = pointRobot +1              
            }
            contador = contador +1
            break
        default:
                alert(`Você digitou o valor ${jogador} que é invalido`)
        }
    }
   
    //condição de vitória
    if (pointRobot > pointUser){
        msg=`Robô vence com ${pointRobot} pontos a ${pointUser}`
        alert(`Robô vence com ${pointRobot} pontos a ${pointUser}`)
    }else{
        msg=`Você vence com ${pointUser} pontos a ${pointRobot}`
        alert(`Você vence com ${pointUser} pontos a ${pointRobot}`)
    }

//Extra: impressão na tela do resultado final
document.write(msg)
document.write(`   Foram realizadas ${contador} rodadas`)