import React from 'react';


import {Header, Logo, Navigator, NavigatorLinks, Li, Anchor} from './styles';

import SolutionLink from './styles';

interface HeaderProps {
  logo?: string;
  linkWhoWeAre: string;
  linkServices: string;
  buttonSolution?: string;

}

const HeaderContent: React.FC<HeaderProps> = (props) => {
    return(
        <Header>

        <Logo href="/">{props.logo}</Logo>

        <Navigator>
          <NavigatorLinks>
              <Li><Anchor to="/">{props.linkWhoWeAre}</Anchor></Li>
            <Li><Anchor to="/">{props.linkServices}</Anchor></Li>
          </NavigatorLinks>
        </Navigator>

        <SolutionLink to="/Products">{props.buttonSolution}</SolutionLink>
    </Header>
    );
}

export default HeaderContent;