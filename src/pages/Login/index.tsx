import React from 'react';


import HeaderContent from '../../components/Header';
import LoginForm from '../../components/LoginForm';

const Login = () => {
    return(
        <>
        <HeaderContent 
            logo="uperttech"
            linkWhoWeAre="Quem Somos"
            linkServices="Serviços"
            buttonSolution="Soluções"
            
        
        
        />
        
        <LoginForm
            title="Ainda não é cadastrado?"
            userRegisterLink="Cadastro"
            LoginAccountTitle="Entrar"
            infoEmail="E-mail"
            infoPassword="Senha"
            buttonLogin="Entrar"
        
        />
        
        
        </>

    )
}

export default Login;