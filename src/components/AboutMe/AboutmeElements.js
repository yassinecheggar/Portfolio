import styled from 'styled-components';
import {Container} from '../../globalStyles';
import { DiGit } from "react-icons/di";

export const SectionTitle = styled.h1`

color:black;
font-size :40px;
margin-top:70px;
`; 

export  const Wrapper=styled.div`
margin-top:40px;
display:flex;
flex-direction:column;
align-items:center;

`;

export const  Image = styled.img`
border-radius: 50%;
width:210px;
`;

export const Name = styled.p`
color:black;
margin-top:20px;

font-family: 'Orelega One', cursive;
font-size:25px;
`; 

export const MainSkills = styled.p`
color:gray;
 font-size:15px;
 font-family: 'PT Sans', sans-serif;
`; 

export  const Contactinfo = styled.div`

margin-top:50px;

`;

export  const GIt = styled.div`
  display: flex;
  color: black;
  justify-self: start;
  text-decoration: none;
  font-size: 25px;
  
  align-items: center;
  margin-top:5px;
`;


export const ContactTitle = styled.p`
    color:black;
    font-size:14px;
    margin-left:10px;
    font-family: 'Orelega One', cursive;

`; 

export const ContactTitleColor = styled.a`
    color:orange;
    font-size:16px;
    margin-left:10px;
    
    font-family: 'Orelega One', cursive;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`; 


export const Text = styled.p`
    margin-top:30px;
    font-size:14px;
    color:#595959;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    width: 650px;
    line-height:30px;
    &:hover{
        text-decoration: underline;
    }

`; 
export const TextWrapper = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom:50px;
    margin-top:10px;
`; 

export  const  Myname  =  styled.span`
  font-size:13px;
  
  font-family: 'Pacifico', cursive;
`;