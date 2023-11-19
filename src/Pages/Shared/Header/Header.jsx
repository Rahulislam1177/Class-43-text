import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container ">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-black " aria-current="page" href="#">Home</NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink to="/About" className="nav-link  text-black" aria-current="page" href="#">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Users" className="nav-link  text-black" aria-current="page" href="#">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link text-black " aria-current="page" href="#">Contact</NavLink>
              </li>
            
              
              
             
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Header;