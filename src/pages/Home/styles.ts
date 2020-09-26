import styled from 'styled-components';

import homeBackground from '../../assets/art3.svg';

import { Link } from 'react-router-dom';






export const Header = styled.header`
    /*it was justified center, but then i put every element to the end of the contaianer*/
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 5%;
`;

export const Logo = styled.a`
    /*logo is going to be right at the begginer of the container*/
    margin: auto;
    left: 0;
    margin-left: 0;
    cursor: pointer;
    font-size: 33px;
    text-transform: uppercase;


    @media(max-width: 600px) {

        margin-left: 25%;
    }

   
`;

export const Navigator = styled.nav`



`; 

export const NavigatorLinks = styled.ul`

    list-style: none;
    margin-right: 25px;

`;

export const Li = styled.li`

    display: inline-block;
    padding: 0 25px;

    @media(max-width: 800px) {

        display: none;
    }

`;

export const Anchor = styled(Link)`

    transition: 0.3s;

    &:hover {
        color: var(--color-button);
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





/*Main Content Styles*/

export const MainContent = styled.div`

    background-image: url(${homeBackground});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 1350px;
    background-position-y: -20px;
    height: 100vh;

    @media(max-width: 1100px) {
        background-image: none;
        display: right;


        background-size: 850px;


    }

`;


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

