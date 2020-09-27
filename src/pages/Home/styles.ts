
import styled from 'styled-components';

import homeBackground from '../../assets/art3.svg';
import homeBackgroundMobile from '../../assets/products-ilustration/example4.svg';

export const MainContent = styled.div`

    background-image: url(${homeBackground});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 1350px;
    background-position-y: -20px;
    height: 100vh;

    @media(max-width: 900px) {
        background-image: url(${homeBackgroundMobile});

        background-position-y: 16px;
        background-size: 200px;


    }

`;


