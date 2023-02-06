import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        
        <Logo src = "https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Disney-Hotstar-900x0.png"  />  
        <NavMenu >

        </NavMenu>


    </Nav>
  )
}

export default Header


const Nav = styled.nav`
    height: 80px;
    background: #090b13;
    
    
    
    
    `
    const Logo = styled.img`
    width:80px;

    
    `
    const NavMenu = styled.div`
    `