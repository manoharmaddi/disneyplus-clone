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
                <span>  SEARCH </span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg"/>
                <span> WATCHLIST </span>

            </a>
            <a>
                <img src="/images/original-icon.svg"/>
                <span> ORIGINALS </span>
            </a>
            <a>
                <img src="/images/movie-icon.svg"/>
                <span> MOVIES </span>
            </a>

            <a>
                <img src="/images/series-icon.svg"/>
                <span> SERIES </span>
            </a>

        </NavMenu>
        <UserImg src='https://i.pinimg.com/originals/f0/da/7b/f0da7b3ad9989546c968b17abc3fda9f.png'  /> 


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
    const UserImg =styled.img`
    
    `