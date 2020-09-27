import React from 'react';


import HeaderContent from '../../components/Header';
import FormUser from '../../components/Form/';

const UserRegister = () => {
    return(
        <>
        <HeaderContent 
            logo="uperttech"
            linkWhoWeAre="Quem Somos"
            linkServices="Serviços"
            buttonSolution="Soluções"
        />
        
        
        <FormUser 
            title="Bem Vindo! Já é cadastrado?"
            loginLink="Login"
            createAccountTitle="Criar Conta :)"
            infoName="Nome"
            infoEmail="E-mail"
            infoPassword="Senha"
            buttonSubmit="Enviar"
        />


        </>
    )
}


export default UserRegister;