import styled from 'styled-components';


export const Header = styled.header`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 30px 5%;
`;

export const Logo = styled.a`
    margin: auto;
    left: 0;
    margin-left: 0;
    cursor: pointer;
    font-size: 33px;
    text-transform: uppercase;

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
`;

export const Anchor = styled.a`

    transition: 0.3s;

    &:hover {
        color: var(--color-button);
    }
`;

export const Button = styled.button`
/*configurar box-shadow*/
    padding: 14px 40px;
    background: var(--color-button);
    color: white;
    border: none;
    outline: none;

    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: var(--color-primary);
    }
    
`;
