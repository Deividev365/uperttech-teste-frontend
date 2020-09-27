import React from 'react';

/*importing my components*/
import HeaderContent from '../../components/Header';
/*Header content Styles*/
import {Header, Logo, Navigator, NavigatorLinks, Li, Anchor} from './styles';

/*Main Content Styles*/
import {MainContent, Main, H1, P, BudgetLink} from './styles';



import SolutionLink from './styles';
 

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


      <Main>
        <H1>Soluções inteligentes para modernizar sua empresa
        </H1>
        <P>Exertise em gerência de Projetos e em desenvolvimento de software para produzir soluçoes que vao direto ao ponto
        </P>

        <BudgetLink to="/UserRegister">Solicite um orçamento</BudgetLink>
      </Main>

  </MainContent>


    </>
    )
}

export default Home;