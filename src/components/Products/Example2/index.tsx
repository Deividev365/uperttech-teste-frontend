import React from 'react';

import imgProduct2 from '../../../assets/products-ilustration/example3.svg';

import {MainContent, Main, ImgIllustration, H1} from './styles';

interface ProductsProps {
    title: string;
} 


const ProductsExample: React.FC<ProductsProps> = (props) => {
return(

<MainContent>
        <Main>
            <ImgIllustration src={imgProduct2} alt="product-illustration"/>
            <H1>{props.title}</H1>
           

        </Main>
        </MainContent>
)

}

export default ProductsExample;