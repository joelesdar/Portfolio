import React from 'react';
import Styled from '@emotion/styled';
// import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Welcome';
import Description from './Description';
import Contact from './Contact';
import SocialBar from './SocialBar';
import SoftSkills from './SoftSkills';
import Technologies from './Technologies';
import Languages from './Languages';
import Studies from './Studies';
import Experience from './Experience';
import Projects from './Projects';

const StyledMain = Styled.div`
    overflow: hidden;
`;

const Main = () => {

    return ( 
        <StyledMain>
            <Welcome />
            <Description />
            <Technologies />
            <SoftSkills />
            <Languages />
            <Studies />
            <Experience />
            <Projects />
            <Contact />
            <SocialBar />
        </StyledMain>
     );
}
 
export default Main;