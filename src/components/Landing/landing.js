import React from "react";
import {
  MyContainer,
  Title,
  Button,
  ContainerWrapper,
  IconContainer,
  Skills,
  SkillsInfo,SkilTitle,SkilSubTitle,GlobalContainer
} from "./landingelement";
import { Container, SectionTitle, SubTitle } from "../../globalStyles";
import { Navbar } from "../../components";
export default function landing() {
  return (
    <>
      <ContainerWrapper>
        
        <MyContainer />
        <Title style={{top:40 , left:"40%"}}>Full-stack</Title>
        <Title bold normal style={{top:215 , left:"35%"}}>
          Web & Mobile
        </Title>
        <Title normal style={{top:300 , left:"40%"}}>developer</Title>
        <Button style={{top:400 , left:"41.5%"}}>TELL ME MORE</Button>

      </ContainerWrapper>

      <Container>
        <SectionTitle>WHAT I DO</SectionTitle>
        <SubTitle>Things I'm skilled at and passionate about.</SubTitle>
      </Container>
      <GlobalContainer>
      <Skills>
        <SkillsInfo>
          <IconContainer src="images/icon1.png" />
          <SkilTitle>Web Application Development</SkilTitle>
          <SkilSubTitle >Fast, responsive and engaging apps that bring your ideas to life.</SkilSubTitle>
        </SkillsInfo>

        <SkillsInfo>
          <IconContainer src="images/icon2.png" />
          <SkilTitle>Mobile Application Development</SkilTitle>
          <SkilSubTitle >Cross-platform apps built with efficiency and speed for Android and iOS.</SkilSubTitle>
        </SkillsInfo>
        <SkillsInfo>
          <IconContainer src="images/icon3.png" />
          <SkilTitle>API Development</SkilTitle>
          <SkilSubTitle >REST APIs that are tailored to your needs and follow the best practices in performance and security.</SkilSubTitle>
        </SkillsInfo>
        <SkillsInfo>
          <IconContainer src="images/icon4.png" />
          <SkilTitle>Third-party API Integration</SkilTitle>
          <SkilSubTitle >Integration with any third-party API of
          your choice. Extend the functionality of your apps with the least amount of effort.</SkilSubTitle>
        </SkillsInfo>
        <SkillsInfo>
          <IconContainer src="images/icon5.png" />
       
          <SkilTitle>Database Design</SkilTitle>
          <SkilSubTitle >Proper Database design for effective Web &
          Mobile development, always aiming for performance, scale and stability.</SkilSubTitle>
        </SkillsInfo>
        <SkillsInfo>
          <IconContainer src="images/icon6.png" />
          <SkilTitle>Cloud Integration</SkilTitle>
          <SkilSubTitle >Deployment and maintenance of your apps
          in a wide range of Cloud Services, from fully managed to highly customizable VPS</SkilSubTitle>
        </SkillsInfo>
      </Skills>
      </GlobalContainer>
    </>
  );
}
