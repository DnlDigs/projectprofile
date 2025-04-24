import React from "react";
import './Header.css' //css for this header

const Header = () => {
    return (
     
       
        
    <nav className="navbar">
    <div className="logo">MyLogo</div>

    <div className="nav-links" id="navLinks">
      <a href="#home">Home</a>
      <a href="#skill">Skill</a>
      <a href="#project">Project</a>
    </div>

    <div className="hamburger" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
        
     
        
            

       
    )
}

export default Header;