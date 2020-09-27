import styled from 'styled-components';

import {Link} from 'react-router-dom'

export const MainContent = styled.div`
    background-color: var(--product-color);
    height: 85vh;

    @media(max-width: 1100px) {
        
    }

`;


export const Main = styled.main`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px 60px;

    @media(max-width: 900px) {
        display: flex;
        flex-direction: column;
    }

`;

export const ImgIllustration = styled.img`
    margin-top: 25px;
    width: 480px;

    @media(max-width: 900px) {
        width: 260px;
    }

`;

export const H1 = styled.h1`
    max-width: 620px;
    margin-bottom: 90px;

    font-size: 44px;
    color: var(--color-title);

    @media(max-width: 900px) {
        font-size: 30px;
        margin-top: 24px;
    }


`;

export default styled(Link)`
    padding: 14px 40px;
    background: var(--color-button);
    color: white;
    border: none;
    outline: none;

    box-shadow: 2px 10px 20px var(--color-button);


    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: var(--color-primary);
    }

    @media(max-width: 800px) {

    display: none;
    
    }    
`;

