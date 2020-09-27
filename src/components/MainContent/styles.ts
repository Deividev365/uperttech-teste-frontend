import styled from 'styled-components';

import { Link } from 'react-router-dom';



export const Main = styled.main`

    flex: 1;
    max-width: 630px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px 60px;

    @media(max-width: 900px) {
        align-items: center;
    }

`;

export const H1 = styled.h1`

    font-size: 54px;
    color: var(--color-primary);

    @media(max-width: 900px) {
        font-size: 42px;
    }


`;

export const P = styled.p`

    color: var(--text-color);
    max-width: 430px;
    
    font-size: 24px;
    font-weight: 500; 
    line-height: 30px;
    margin-top: 16px;

    @media(max-width: 900px) {
        font-size: 24px;
    }

`;

 export const BudgetLink = styled(Link)`

    background: var(--color-button);
    box-shadow: 2px 10px 20px var(--color-button);

    color: white;

    width: 100%;
    max-width: 270px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 65px;


    @media(max-width: 900px) {
        width: 100%;
        max-width: 700px;
    }



`;

