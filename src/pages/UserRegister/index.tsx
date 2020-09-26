import React from 'react';

import {Form, CadasterContainer, LoginContainer, H1, LoginLink, Input, H3, Info, ButtonSubmit} from './styles';
/*Entrar login ou cadastro novo*/


const UserRegister = () => {
    return(

        <Form method="POST">

            <LoginContainer>
                <H1>Bem Vindo!</H1>
                <LoginLink to="/login">Login</LoginLink>
            </LoginContainer>


            <CadasterContainer>
                <H3>Criar Conta</H3>

                <div className="item">
                    <Info>Nome</Info>
                    <div>
                    <Input
                        type="text"
                        placeholder=""
                     />
                    </div>
                </div>

                <div className="item">
                    <Info>E-mail</Info>
                    <div>
                    <Input
                    type="text"
                    placeholder="example@gmail.com"
                    />
                    </div>
                </div>

                <div className="item">
                    <Info>Senha</Info>
                    <div>
                        <Input
                        type="password"
                        placeholder=""
                        />
                    </div>
                </div>

                <ButtonSubmit type="submit">Enviar</ButtonSubmit>
            </CadasterContainer>

        </Form>
    )
}


export default UserRegister;