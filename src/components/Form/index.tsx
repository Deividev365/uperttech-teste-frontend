import React from 'react';


import {Form, CadasterContainer, LoginContainer, H1, Input, H3, Info, ButtonSubmit} from './styles';

import LoginLink from './styles';


interface FormUserProps {
    title: string;
    loginLink: string;
    createAccountTitle: string;
    infoName: string;
    infoEmail: string;
    infoPassword: number;
    buttonSubmit: string;

}


const FormUser: React.FC<FormUserProps> = (props) => {
    return(
        <Form method="POST">

            <LoginContainer>
                <H1>{props.title}</H1>
                 <LoginLink to="/login">{props.loginLink}</LoginLink>
            </LoginContainer>


            <CadasterContainer>
                <H3>{props.createAccountTitle}</H3>

                <div>
                    <Info>{props.infoName}</Info>
                    <div>
                    <Input
                        type="text"
                        placeholder=""
                     />
                    </div>
                </div>

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

                <ButtonSubmit type="submit">{props.buttonSubmit}</ButtonSubmit>
            </CadasterContainer>

        </Form>
    );
}


export default FormUser;