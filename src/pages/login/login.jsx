import './login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import img from '../../assets/do-utilizador.png'

function Login(){
    
    const [InputEmail, SetInputEmail] =  useState('')
    const [InputPassword, SetInputPassword] =  useState('')



    const navigate = useNavigate();

    const Ativador = async(event)=>{
        event.preventDefault();

        const url = 'http://localhost:4141/users/login'

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    gmail: InputEmail,
                    senha: InputPassword,
                })
            }) 
            const data = await res.json();
            
            if(res.status === 404){
                alert(data.message)
            }
            if(res.status === 500){
                alert(data.message)
            }
            if(res.status === 201){
                alert(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
return(
    <div className="main">
        <form className="loginForm" onSubmit={Ativador}>
            <img src={img}/>
            <h1>Login</h1>
            <div className="inputs">
                <div className="wrapper email">
                    <input type="email" placeholder='E-mail' onChange={(input) => SetInputEmail(input.target.value)}/>
                </div>
                <div className="wrapper password">
                    <input type="password" placeholder='Senha' onChange={(input) => SetInputPassword(input.target.value)}/>
                </div>
            </div>
            <button type='submit'>Login</button>
            <a href="#" onClick={(link) => {navigate('/')}}>Don`t have an account? <strong>Register</strong></a>            
        </form>
    </div>
)
}
export default Login
