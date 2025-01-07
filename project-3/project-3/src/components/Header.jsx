import React from 'react'
import headerLogo from './../images/chef-claude-icon.png'
import './../CssFiles/header.css'
const Header = () => {
  return (
    <header>
          <img src={headerLogo} alt="header logo"/>
          <h1>Chef Claude</h1>
    </header>
  )
}
export default Header;
