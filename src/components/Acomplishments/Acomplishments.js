import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles.js";

const data = [
  {
    number: 50,
    text: "Designed and Developed 50+ frontend & Backend Applications utilizing React.js, Node.js and PHP",
  },
 
  {
    number: 2,
    text: "We have experience with Digital Marketing, SEO, E-commerce & Admin Applications.",
  },
  {
    number: 100,
    text: "Have More than 100 Graphic Designing projects,We Know, How to do Videography, Photography and Photoshop",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Achievements </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);



export default Acomplishments;
