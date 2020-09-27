import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Header = styled.header`
    /*it was justified center, but then i put every element to the end of the contaianer*/
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 5%;
`;

export const Logo = styled(Link)`
    /*logo is going to be right at the begginer of the container*/
    color: var(--color-primary);
    margin: auto;
    left: 0;
    margin-left: 0;
    cursor: pointer;
    font-size: 33px;
    text-transform: uppercase;
    text-decoration: none;

    &:active {
        color: var(--color-primary);
    }


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