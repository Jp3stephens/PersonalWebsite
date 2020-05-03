import React from 'react';
import {Link} from 'react-router-dom'; 

const Nav = () => {
  return (
    <div className="navBar">
      <div className="logo">

        </div>
        <ul>
          <Link to="/">
          <li className="active">
          Projects</li>
          </Link>
          <Link to="/Resume">
          <li>
          
          Resume</li>
          </Link>
          <Link to ="/blog">
          <li>Blog</li>
          </Link>
        </ul>
        <div className="cookies">
          <span>Please</span>
          <span>Hire Me</span>
        </div>
    </div>
  )
}

export default Nav;
