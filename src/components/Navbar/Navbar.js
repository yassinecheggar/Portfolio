import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";
import {
    Nav,
    NavLogo,
    NavbarContainer,
    NavMenu,
    NavItem,
    MobileIcon,
    NavLinks,
    Img
  } from "./NavbarElements";
  import { CSSTransition } from 'react-transition-group';

  
  export default function Navbar() {
    const [click, setClick] = useState(false);
    const handlclick = () => setClick(!click);
    const [nav, setNav] = useState(false);
    const [sec1, setSec1] = useState(false);
    const [sec2, setSec2] = useState(false);
    const [sec3, setSec3] = useState(false);
    const [sec4, setSec4] = useState(false);


    const  changeSectionColor=()=>{
      if(window.scrollY>=300 && window.scrollY<900) setSec1(true); else setSec1(false);
    }
    const  changebackground=()=>{
   
      
      if(window.scrollY>=40){  setNav(true);}else { setNav(false)}
      if(window.scrollY>=300 && window.scrollY<1200) setSec1(true); else setSec1(false);
      if(window.scrollY>=1210 && window.scrollY<2300) setSec2(true); else setSec2(false);
      if(window.scrollY>=2310 && window.scrollY<2800) setSec3(true); else setSec3(false);
     if(window.scrollY>=2820 && window.scrollY<4000) setSec4(true); else setSec4(false);


    }
    window.addEventListener('scroll', changebackground,changeSectionColor );
      return (
          <>
            <IconContext.Provider value={{ color: "#fff" }}>
              
              <Nav active={nav}>
              <NavbarContainer>
              <NavLogo active={nav}  to="/">
               
               <Img src="images/logo2.png" />
             </NavLogo>
             <MobileIcon onClick={handlclick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handlclick} click={click}>
              <NavItem  >
                <NavLinks active={sec1} >WHAT I DO</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks  active={sec2}>PORTFOLIO</NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks  active={sec3}>ABOUT</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks active={sec4}>CONTACT</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>

              </Nav>
              </IconContext.Provider>
          </>

      )
  }
  