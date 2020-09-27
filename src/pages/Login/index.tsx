import React from 'react';

import {Form, CadasterContainer, LoginContainer, H1,  LoginLink, Input, H3, Info, ButtonSubmit} from './style';

import HeaderContent from '../../components/Header';

const Login = () => {
    return(
        <>
        <HeaderContent logo="uperttech"/>
        
        <Form method="">

            <LoginContainer>
                <H1>Faça o Login :)!</H1>
                <LoginLink to="/userRegister">Ainda não tem uma conta?</LoginLink>

            </LoginContainer>


            <CadasterContainer>
                <H3>Entrar</H3>

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

                <ButtonSubmit type="submit">Entar</ButtonSubmit>
            </CadasterContainer>

        </Form>
        </>
    )
}

export default Login;