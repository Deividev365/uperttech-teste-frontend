import styled from 'styled-components';


export const MainContent = styled.div`
    background-color: var(--product-color);
    height: 70vh;

    @media(max-width: 1100px) {
        
    }

`;


export const Main = styled.main`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 60px;

    @media(max-width: 900px) {
        align-items: center;
    }

`;

export const ImgIllustration = styled.img`
    margin-top: 25px;
    width: 480px;

`;

export const H1 = styled.h1`
    max-width: 720px;
    margin-bottom: 90px;

    font-size: 44px;
    color: var(--color-title);

    @media(max-width: 900px) {
        font-size: 42px;
    }


`;


