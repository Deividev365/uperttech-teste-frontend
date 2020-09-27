import styled from 'styled-components';


export const MainContent = styled.div`
    background-color: var(--white);
    height: 70vh;

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
        width: 360px;   
    }

`;

export const H1 = styled.h1`
    max-width: 600px;
    margin-right: 65px;
    font-size: 36px;
    color: var(--color-primary);

    @media(max-width: 900px) {
        font-size: 22px;
        margin-top: 30px;
    }


`;


