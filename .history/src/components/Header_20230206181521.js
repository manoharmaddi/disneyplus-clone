import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        
        <Logo src = "/images/logo.svg"  />  
        <NavMenu >
            <a>
                <img src="/images/home-icon.svg"/>
                <span> HOME </span>
            </a>

            <a>
                <img src="/images/search-icon.svg"/>
                <span>  search </span>
            </a>


        </NavMenu>


    </Nav>
  )
}

export default Header


const Nav = styled.nav`
    height: 80px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    
    
    
    
    `
    const Logo = styled.img`
    width:80px;

    
    `
    const NavMenu = styled.div`
    display: flex;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        img {
            height: 20px;

        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
        }
    }
    `