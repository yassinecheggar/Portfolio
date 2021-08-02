import styled from 'styled-components';
import {Container} from '../../globalStyles';
import {Link} from  'react-router-dom';

export const Nav = styled.nav` 
transform: transale3d(0,0,0); 
background-color:${props=>props.active ? "#090901":"transparent"};
transition:  ease 0.5s;
height:${props=>props.active ? "70px":"110px;"};
display:flex;
justify-content:center;
align-items:center;
font-size:1.0rem;
position: fixed;
width:100%;
top:0;
z-index: 999;

@media screen and  (max-width:960px){
    background:#090901;
}
`;

export const  NavbarContainer =styled(Container)`
display:flex;
justify-content: space-between;
height: 80px;

${Container}

`;
export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;

@media screen and  (max-width:960px){

    display:flex;
    flex-direction:  column;
    width:100%;
    height: 90vh;
    position:absolute;
    top:80px;
    left:${({click})=>(click? 0:'-100%')};
    opacity:1;
    transition:all 0.5s ease; 
    background: #090901 ;
}
`;

export const NavItem = styled.li`
height: 80px;

&:hover{
   color: orange;
}
@media screen and  (max-width:960px){
    width:100%;
    &:hover{
         border:none;
         
         
    }
}
`;
export const NavLinks = styled.div`

display:flex;
align-items:center;
text-decoration:none;
font-family: 'Rozha One', serif;
padding:0.5rem 1rem;
height: 100%;
color: ${props=>props.active ? "yellow" : "wheat"};
transition: transform .2s;
&:hover{
        color:orange;
        transform: scale(1.4);
    }
@media screen and  (max-width:960px){
    text-align:center;
    padding:2rem;
    width:100%;
    display:table;


    &:hover{
        color:orange;
        transition: all 0.3s ease,
    }
}
`;

export const  NavLogo = styled.div`

justify-self:flex-start;
cursor: pointer;
text-decoration:none;
display:flex;
max-width:${props=>props.active ? "150px":"200px;"};
height: auto;
transition:ease 0.7s;;
@media screen and  (max-width:960px){

width:40%;
}
`;

export const  Img = styled.img`
   
   height: auto;
   width:100%;
   
   @media screen and  (max-width:960px){
    height: auto;
    width:100%;
   }
`;
export const MobileIcon = styled.div`
display:none;
@media screen and  (max-width:960px){
    display:block;
    position:absolute;
    top:0;
    right:0; 
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
}

`;