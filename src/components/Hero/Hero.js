import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents"

import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"
import React from "react"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <br />
        Web Wizards
      </SectionTitle>
      <SectionText>
        We build trust with our customers through inspiring Products, satisfying
        experiences & compelling marketing.
        <br />
        <i>Web Wizards</i> has come up with it's new and dynamic venture
        conceptualized by a team of young, creative and exuberant professionals
        with a vast experience in the field of events and marketing
        communication.
        <br />
      </SectionText>
      <Button>
        <a style={{display: "block", color: "white", padding: "1.5em"}} href="tel:+91 73846 19742">Contact us</a>
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
