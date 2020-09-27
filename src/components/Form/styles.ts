import styled from 'styled-components';

import {Link} from 'react-router-dom';

import SolutionLink from '../../pages/Home';



export const Form = styled.form`
    background-color: var(--white);
    width: 800px;
    min-height: 400px;
    margin: 50px auto;

    box-shadow: 12px 12px 60px  1px var(--color-button);
    border-radius: 4px;

    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: none;
    }

`;

export const LoginContainer = styled.section`

    text-align: center;
    margin: 90px auto;
    padding: 25px;

    @media(max-width: 900px) {
    }

`;

export const H1 = styled.h1`
    margin-bottom: 35px;
    font-size: 36px;

    @media(max-width: 900px) {

        margin-bott: 60px;
    }
`;

export default styled(Link)`

padding: 14px 40px;
    background: var(--color-button);
    color: white;
    border: none;
    outline: none;

    box-shadow: 2px 10px 20px var(--color-button);
    
    /* @media(max-width: 900px) {

    } */
`; 




export const CadasterContainer = styled.section`
    padding: 35px;
    background-color: var(--color-button);
`;

export const Input = styled.input`

    width: 100%;
    height: 34px;
    outline: none;
    background-color: #ffffff;
    font-size: 19px;
    font-weight: bold;
    margin-top: 14px;
    border-radius: 4px;

    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;

    &::placeholder {
        font-size: 16px;
    }

`;

export const H3 = styled.h3`

    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
    text-transform: uppercase;

`;

export const Info = styled.div`

    color: var(--color-secondary);
    font-weight: normal;
    margin-top: 16px;
`;

export const ButtonSubmit = styled.button`

width: 100%;
    height: 45px;
    margin-top: 40px;
    outline: none;
    border: 2px solid var(--color-primary);
    border-radius: 4px;
    background-color: var(--color-button);
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    transition: 0.2s;

    &:hover {
        background-color: var(--color-primary);
    }

`;