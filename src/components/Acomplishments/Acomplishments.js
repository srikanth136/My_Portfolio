import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 5, text: ' c++ Hackerrank stars', },
  { number: 100, text: 'c++ soluctions', },
  { number: 5, text: 'Full stack projects', }
];

const Acomplishments = () => (
  
  <Section>
  <SectionTitle>Personal Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card,index) => (
      <Box key = {index}>
      <BoxNum>{card.number}+</BoxNum>
      <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>

  </Section>
);

export default Acomplishments;
