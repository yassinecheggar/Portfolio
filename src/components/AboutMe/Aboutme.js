import React from "react";
import { Container, SectionTitle, SubTitle } from "../../globalStyles";
import { FaGitSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  Wrapper,
  Image,
  Name,
  MainSkills,
  GIt,
  ContactTitle,
  Contactinfo,
  ContactTitleColor,
  TextWrapper,
  Text,Myname
} from "./AboutmeElements";
function Aboutme() {
  return (
    <>
      <Container style={{zIndex:-1}}>
        <SectionTitle>ABOUT ME</SectionTitle>
        <SubTitle>Let's break the ice a little.</SubTitle>
        <Wrapper>
          <Image src="images/me.jpg" />
          <Name>Yassine Cheggar</Name>
          <MainSkills>Java EE | React | Android</MainSkills>

          <Contactinfo>
            <GIt>
              <FaLinkedin />
              <ContactTitle> Contact me on </ContactTitle>{" "}
              <ContactTitleColor  href="https://www.linkedin.com/in/yassine-cheggar-5442a8141/" target="_blank"> LinkedIn</ContactTitleColor>
            </GIt>

            <GIt>
              <FaGitSquare />
              <ContactTitle> See my Code on </ContactTitle>{" "}
              <ContactTitleColor href="https://github.com/yassinecheggar" target="_blank">GitHub</ContactTitleColor>
            </GIt>
          </Contactinfo>
          <TextWrapper>
            <Text>
              My passion is making ideas come to life, be it working solo, as
              part of a team or leading a team of fellow developers.
              </Text>
              <Text>
              My go-to technologies are React and JAVA, and I have completed a
              wide range of projects using them. Those are not the only two
              libraries/frameworks I'm familiar with though, and I'm always
              happy to discuss my client's needs and find the best solutions for
              them.</Text>
              <Text>
                I consider myself creative and hardworking, as my
              stats show. If you liked my profile so far, drop me a message and
              we'll discuss how I can be useful to your project.
            </Text>
          </TextWrapper>

          <text style={{fontSize:14, marginBottom:20}}>DESIGNED & CODED BY <Myname>YASSINE CHEGGAR</Myname> </text>
        </Wrapper>
      </Container>
    </>
  );
}

export default Aboutme;
