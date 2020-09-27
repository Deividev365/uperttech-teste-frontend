import React from 'react';

import {MainContent} from './styles';


import HeaderContent from '../../components/Header';
import MainLandingContent from '../../components/MainContent';

 

const Home = () => {
    return(
    <>
      
    <MainContent>


      <HeaderContent 
        logo="uperttech"
        linkWhoWeAre="Quem Somos"
        linkServices="Serviços"
        buttonSolution="Soluções"
      
      />

      <MainLandingContent 
        title="Soluções inteligentes para modernizar sua empresa"
        paragraph="Expertise em gerência de Projetos e em desenvolvimento de software para produzir soluçoes que vao direto ao ponto"
        budgetLink="Solicite um orçamento"
        
        />

    </MainContent> 


    </>
    )
}

export default Home;