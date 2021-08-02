import React from 'react'
import styled from 'styled-components'

import {Container
   } from '../../globalStyles'
export const ContainerWrapper = styled.div`
    background-color:#e3e3e3;
    
`;

export const CardContainer = styled.div`

    margin-top:60px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    width:calc((100%) - (60px));
  
  @media screen and (max-width: 991px) {
  
   width:auto;
  }
    

`;
export const Card = styled.div`

background-color:white;
height:350px ;
width:360px;
margin-bottom:60px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:start;
`;
export const CardImage = styled.div`
background: url(${props=>props.background}) no-repeat center ;

width:360px;
height:260px;

&:hover{
  background: linear-gradient(0deg, rgba(255, 162, 0,0.9), rgba(255, 162, 0,0.4)),url(${props=>props.background}) no-repeat center;
 
}


`;
export const GlobalContainer= styled(Container)`


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
 
${Container};
`;

export const  CardTitle=styled.h3`
color:#444444;
margin-top:10px;

width:200px;
font-family: 'Rozha One', serif; 
font-size:22px;

`;


export const SkilSubTitle = styled.p`
font-size:18px;
color:gray;
width:250px;
font-family: 'PT Sans', sans-serif;
@media screen and (max-width: 991px) {
  width:400px;
  
  }
`; 