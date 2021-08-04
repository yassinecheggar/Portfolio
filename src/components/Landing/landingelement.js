import styled from 'styled-components';
import {Container} from '../../globalStyles';


export const ContainerWrapper = styled.div`
position:relative;
height: 700px;
`;


export const  MyContainer = styled.div`
  height:100% ;
  
  background-image:linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("images/home.jpg");  
  box-sizing: border-box;
  margin-top: 0;
  background-size: cover;
  position: absolute;
  z-index:-1;
  top:0;
  left:0;
  right:0;
  @media screen and (max-width: 791px) {
  
 width: 100%;
 }
`;

export const  Title = styled.h1`
  margin-top:${props=>props.normal ? "20px":"100px"};
  color:white;
  font-weight:${props=>props.bold ? "bold":"normal"}; 
  font-size:60px;

  &:hover{text-decoration : underline}
 
  @media screen and (max-width: 791px) {
   font-size:40px;
  width:max-content;
 }
`;
export const  Button = styled.button`
margin-top:40px;
color:white;
background:#f9cf3f;
width:220px;
height:70px;
border: none;
border-radius:10px;
font-size:18px;

&:hover{
  background:#ffca17;

}
`;


export const SectionTitle = styled.h1`

color:#444444;
font-size :45px;
margin-top:140px;
font-family: 'Orelega One', cursive;
`; 
export const SubTitle = styled.p`

color:#444444;

margin-top:15px;
font-family: 'Kurale', serif;
font-style: italic;
font-size :20px;
`; 

export const  IconContainer = styled.img`
   width:120px;
   height:auto;
`;


export const Skills = styled.div`
    margin-top:80px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width:calc((90%) - (100px));
  @media screen and (max-width: 991px) {
  
   width:auto;
  }
    
`;  

export const SkillsInfo = styled.div`
    margin-top:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:300px;
  
    @media screen and (max-width: 991px) {
    
  width:max-content;
 }
`;

export const SkilTitle = styled.h3`

color:#444444;
margin-top:10px;
height:50px ;
width:200px;
font-family: 'Rozha One', serif;  

@media screen and (max-width: 991px) {
  width:auto;
  margin-top:20px;
  }
`; 

export const SkilSubTitle = styled.p`
font-size:16px;
display: flex;
color:gray;
margin-top:9px;
width:250px;
font-family: 'PT Sans', sans-serif;

`; 

export const GlobalContainer= styled(Container)`


  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:200px;
 
  ${Container};
`;

