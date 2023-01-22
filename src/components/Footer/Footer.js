import React from "react"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai"

import { SocialIcons } from "../Header/HeaderStyles"
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles"

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91-7384-619-742">+91-7384-619-742</LinkItem>
          <LinkItem href="tel:+91-6297-668-173">+91-6297-668-173</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
<<<<<<< HEAD
          <LinkItem href="mailto:webwizards0779@gmail.com">
          webwizards0779@gmail.com
=======
          <LinkItem href="mailto:muhammadroshan788@gmail.com">
            webwizards@gmail.com
>>>>>>> 9949a6d7d3b99c7e299076cf26b9010ec258566c
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Turning Ideas into Reality</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/roshan-ican">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/muhammad-roshan/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/IamMuha51906610">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/muhammad_roshan_ali">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
