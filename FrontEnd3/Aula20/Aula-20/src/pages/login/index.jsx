import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './index.css';
import logodh from '../../assets/logodh.png';
import api from '../../services/api'


function Login(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function autentic(){
        try {
            const response = await api.post("/auth",{email, password});
            console.log(response.data)
            navigate('/home/');
        } catch (error) {
            alert("Nao é possivel logar")
        }
    }

    return(
    <div id='login-container'>
        
        <img src={logodh} alt={"logo"} id='logo'/>
        
        <div id='login' >
           
            <input type="email" name="email" 
            placeholder='Informe o email'
            className='input-login'
            onChange={(event)=>setEmail(event.target.value)}
            />  
            <input type="password" 
            name="senha" 
            className='input-login'
            placeholder='Informe a senha' 
            onChange={(event)=>setPassword(event.target.value)}
            />
                        
            <input type="button" id='login-button' value="Entrar" onClick={autentic} />
            
        </div>
    </div>
    )
    
}

export default Login;