import React from 'react';

/* import {Form, CadasterContainer, LoginContainer, H1, LoginLink, Input, H3, Info, ButtonSubmit} from './styles';
 *//*Entrar login ou cadastro novo*/
import HeaderContent from '../../components/Header';
import FormUser from '../../components/Form/';

const UserRegister = () => {
    return(
        <>
        <HeaderContent 
            logo="uperttech"
            linkWhoWeAre="Quem Somos"
            linkServices="Serviços"
            buttonSolution="Voltar"
        />
        
        
        <FormUser/>
        </>
    )
}


export default UserRegister;