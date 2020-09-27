import React from 'react';

import {Form, CadasterContainer, LoginContainer, H1, Input, H3, Info, ButtonSubmit} from './styles';


import LoginLink from './styles';


interface LoginFormProps {
    title: string;
    userRegisterLink: string;
    LoginAccountTitle: string;
    infoEmail: string;
    infoPassword: string;
    buttonLogin: string;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
    return(
        <Form method="">

            <LoginContainer>
                <H1>{props.title}</H1>
                <LoginLink to="/userRegister">{props.userRegisterLink}</LoginLink>

            </LoginContainer>


            <CadasterContainer>
                <H3>{props.LoginAccountTitle}</H3>

                <div className="item">
                    <Info>{props.infoEmail}</Info>
                    <div>
                    <Input
                    type="text"
                    placeholder="example@gmail.com"
                    />
                    </div>
                </div>

                <div className="item">
                    <Info>{props.infoPassword}</Info>
                    <div>
                        <Input
                        type="password"
                        placeholder=""
                        />
                    </div>
                </div>

                <ButtonSubmit type="submit">{props.buttonLogin}</ButtonSubmit>
            </CadasterContainer>

        </Form>
    )
}

export default LoginForm;