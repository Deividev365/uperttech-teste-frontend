import React from 'react';


import imgProduct1 from '../../../assets/products-ilustration/example4.svg';

import {MainContent, Main, ImgIllustration, H1} from './styles';


interface ProductsProps {
    title: string;
    LinkTitle?: string;
}



const MainProducts: React.FC<ProductsProps> = (props) => {
    return(
        <>

        <MainContent>
        <Main>
            <H1>{props.title}</H1>
            <ImgIllustration src={imgProduct1} alt="product-illustration"/>
           
        </Main>
        </MainContent>
        </>
    );
}

export default MainProducts;