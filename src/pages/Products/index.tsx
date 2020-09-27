import React from 'react';


import HeaderContent from '../../components/Header';
import MainProducts from '../../components/Products/Example1';
import ProductsExample from '../../components/Products/Example2';



const Products = () => {
    return(
        <>
        <HeaderContent 
             logo="uperttech"
             linkWhoWeAre="Quem Somos"
             linkServices="Serviços"
             buttonSolution="Voltar"
        />

        <MainProducts 
            title="Criamos Softwares que mudam a sua forma de trabalhar"
        />

        <ProductsExample 
            title="Nosso foco diario é prezar pela qualidade de nossos produtos"
        />

        <MainProducts 
            title="Temos uma Equipe de pessoas engajadas em resolver os seus problemas"
        />

        <ProductsExample 
            title="Entregamos Resultados de valor para nossos clientes"
        />
        
        <MainProducts 
            title="O mundo é digital. Faça Parte agora Mesmo!" LinkTitle="Faça Um Orçamento"
        />

        </>
    )
}

export default Products;