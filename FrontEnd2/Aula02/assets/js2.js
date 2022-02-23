var pointUser, pointRobot, msg

pointRobot = 0
pointUser = 0


while (pointRobot <3 && pointUser <3){
    let robo = parseInt(Math.random()*3+1)
    
    switch (jogador = parseInt(prompt("Digite 1- Pedra, 2- Papel ou 3-Tesoura"))){
        case 1:
        case 2:
        case 3:
            if (jogador ==1 && robo ==1 || jogador ==2 && robo ==2 || jogador ==3 && robo ==3 ){
                alert("Empatou")
            }if (jogador ==1 && robo ==3 || jogador ==3 && robo == 2 || jogador ==2 && robo == 1){
                alert("Jogador ganha rodada")
                pointUser = pointUser + 1
            }if(jogador ==3 && robo ==1 || jogador ==2 && robo == 3 || jogador ==1 && robo == 2){
                alert("Robo vence rodada")
                pointRobot = pointRobot +1
                
            }
            break
        default:
                alert("valor inválido")
        }


    }
    
 

if (pointRobot > pointUser){
    msg=`Robô vence com ${pointRobot} pontos a ${pointUser}`
    alert(`Robô vence com ${pointRobot} pontos a ${pointUser}`)
}else{
    msg=`Você vence com ${pointUser} pontos a ${pointRobot}`
    alert(`Você vence com ${pointUser} pontos a ${pointRobot}`)
}
document.write(msg)