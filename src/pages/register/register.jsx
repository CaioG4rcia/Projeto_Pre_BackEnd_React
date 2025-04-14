import './register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register(){

    const [inputValUser, SetInputValUser] = useState('') 
    const [inputValEmail, SetInputValEmail] = useState('') 
    const [inputValPassword, SetInputValPassword] = useState('') 
    const [inputValCPassword, SetInputValCpassword] = useState('') 

    const navigate = useNavigate();
    
    const Ativador = async (event)=>{
        event.preventDefault();

        if(inputValPassword != inputValCPassword){
            alert('As senhas não coincidem!')
            return
        }


        const url = 'http://localhost:4141/users'

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    nome: inputValUser,
                    gmail: inputValEmail,
                    senha: inputValPassword,
                })
            })
            if(res.ok){
                alert('Usuário Criado com Sucesso!')
                navigate('/login');
            }
        } catch (error) {
            alert('Erro ao Criar Usuário!')
        }
    }

    return(
        <div className="main">
            <form className="formRegister" onSubmit={Ativador}>
                <h1>Sing Up</h1>
                <div className="inputs">
                    <div className="wrapper user">
                    <input type="text" placeholder='User' onChange={(input) => SetInputValUser(input.target.value)} required/>
                    </div>
                    <div className="wrapper email">
                    <input type="email" placeholder='Email' onChange={(input) => SetInputValEmail(input.target.value)}required/>
                    </div>
                    <div className="wrapper password">
                    <input type="password" placeholder='Password' onChange={(input) => SetInputValPassword(input.target.value)} required/>
                    </div>
                    <div className="wrapper confirmPassword">
                    <input type="password" placeholder='Confirm Password'onChange={(input) => SetInputValCpassword(input.target.value)} required/>
                    </div>
                </div>
                <button type="submit">Sing Up</button>
                <a href="#" onClick={(link) => {navigate('/login')}}>Already have an account? <strong>Login</strong></a>            
            </form>
        </div>
    )
}

export default Register
