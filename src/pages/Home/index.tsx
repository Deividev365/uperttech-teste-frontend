import React from 'react';

import {Header, Logo, Navigator, NavigatorLinks, Li, Anchor, Button} from './styles';


const Home = () => {
    return(
    
    <Header>

        <Logo href="/">Uperttech</Logo>

        <Navigator>
          <NavigatorLinks>
            <Li><Anchor href="/">Quem Somos</Anchor></Li>
            <Li><Anchor href="/">Serviços</Anchor></Li>
          </NavigatorLinks>
        </Navigator>

        <a href="/"><Button>Soluções</Button></a>
    </Header>
    )
}

export default Home;