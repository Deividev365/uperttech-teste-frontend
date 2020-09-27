import React from 'react';

import {Main, H1, P, BudgetLink} from './styles';

interface MainLandingProps {
    title: string;
    paragraph: string;
    budgetLink: string;
}


const MainLandingContent: React.FC<MainLandingProps> = (props) => {
    return(

        <Main>
        <H1>{props.title}
        </H1>
        <P>{props.paragraph}
        </P>

        <BudgetLink to="/UserRegister">{props.budgetLink}</BudgetLink>
      </Main>
    );
}

export default MainLandingContent;