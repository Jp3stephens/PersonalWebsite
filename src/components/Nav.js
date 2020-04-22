import React from 'react';


const Nav = () => {
  return (
    <div className="navBar">
      <div className="logo">

        </div>
        <ul>
          <li className="active">
          Home</li>
          <li>
          Blog</li>
          <li>
          My Projects</li>
          <li>Resume</li>
        </ul>
        <div className="cookies">
          <span>Cookies</span>
          <span>Privacy Policy</span>
        </div>
    </div>
  )
}

export default Nav;
