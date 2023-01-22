import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

import { DiCssdeck } from "react-icons/di";
import Link from "next/link";
import React from "react";

const Header = () => (
  <div>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20",
          }}
        >
          {/* <DiCssdeck size="5rem" /> */}
          <img src="/" />
          <Span>Web Wizards</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li><a href="#projects">
        <NavLink>Projects</NavLink>
      </a></li>
      <li>
      <a href="#vision">
        <NavLink>Our Vision</NavLink>
      </a>
      </li>
      <li><a href="#about">
        <NavLink>About Us</NavLink>
      </a></li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.instagram.com/web_wizard_flora">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/webwizards">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/web-wizards/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://twitter.com/IamMuha51906610">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons> */}
    </Div3>
  </div>
);

export default Header;
