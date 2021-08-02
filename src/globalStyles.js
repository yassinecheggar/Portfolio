import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }

`;

export const containerLand = styled.div`

height: 700px;
`;
export const SectionTitle = styled.h1`

color:#444444;
font-size :45px;
margin-top:100px;
font-family: 'Orelega One', cursive;
`; 
export const SubTitle = styled.p`

color:#444444;

margin-top:14px;
font-family: 'Kurale', serif;
font-style: italic;
font-size :18px;
`; 

export default GlobalStyle;
