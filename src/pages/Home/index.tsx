import React from 'react';
/*Header content Styles*/
import {Header, Logo, Navigator, NavigatorLinks, Li, Anchor} from './styles';

/*Main Content Styles*/
import {MainContent, Main, H1, P, BudgetLink} from './styles';



import SolutionLink from './styles';
 

const Home = () => {
    return(
    <>
      
      <MainContent>

    <Header>

        <Logo href="/">Uperttech</Logo>

        <Navigator>
          <NavigatorLinks>
            <Li><Anchor to="/">Quem Somos</Anchor></Li>
            <Li><Anchor to="/">Serviços</Anchor></Li>
          </NavigatorLinks>
        </Navigator>

        <SolutionLink to="/Products">Soluções</SolutionLink>
    </Header>




  
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