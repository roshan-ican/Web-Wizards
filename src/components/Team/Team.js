import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./TeamStyles"
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents"

import React from "react"
import { members } from "../../constants/constants"

const Teams = () => (
  // This is where we will put all our projects
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Our Team Section</SectionTitle>
    <GridContainer>
      {members.map(({ id, image, name, description, tags, gmail }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{name}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>

          <UtilityList>
            <ExternalLinks href={gmail}>Contact</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
)

export default Teams
