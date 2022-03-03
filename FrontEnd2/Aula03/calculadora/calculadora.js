import somar from './somar.js'
import dividir from './dividir.js'
import subtrair from './subtrair.js'
import multiplicar from './multiplicar.js'

var resultado;



 
     let num1 =parseFloat(prompt('Digite o primeiro valor para calcular'))
     let num2 =parseFloat(prompt('Digite o segundo valor para calcular'))
     let operador =parseInt((prompt('Digite a operação desejada:\n1-Soma,\n2-Subtração,\n3-Multiplicação ou\n 4-Divisão\n **OU outra tecla diferente das anteriores para sair!!')))
            switch (operador) {
                case 1:
                case 2: 
                case 3:  
                case 4:
                    if (operador ==1){
                    resultado = alert(somar(num1,num2))  
                    novoCalculo()             
                    } if(operador ==2){
                        resultado = alert(subtrair(num1,num2))
                        novoCalculo() 
                    }if(operador ==3){
                        resultado = alert(multiplicar(num1,num2)) 
                        novoCalculo()                 
                    }if(operador ==4){
                        resultado = alert(dividir(num1,num2))
                        novoCalculo()
                    }
                    break
                default:
                    alert("Obrigado por usar nossa calculadora")
                    novoCalculo()
                    break;
    }
    



// function novoCalculo(continua){
//     var continua = parseInt(prompt('Deseja continuar? 1 para sim ou 2 para não'))

//     while(continua =>1 || continua <=2){
//         if(continua ===1){
//             calculadoras()
//         }if (continua ===2){
//             break
//         }
//         else{
//             alert('Opção inválida, digite um dos campos solicitados.')

//         }
//     } return novoCalculo()
// } 
