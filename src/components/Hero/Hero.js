import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <section>
   
   <leftSection>
     <SectionTitle main center>
     Welcome To <br />
     my personal Portfolio
     </SectionTitle>
     <SectionText>
       My name is Srikanth.I'm a fullstack developer,and electronics and communication engineer,currently creating real life projects which makes people life easier.😊
     </SectionText>
     <Button onClick={() => window.location = 'https://www.linkedin.com/in/srikanth-chinna-2b74a518a/'}>Learn more</Button>

   </leftSection>
 </section>
);

export default Hero;