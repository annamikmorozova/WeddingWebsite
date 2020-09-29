import React from 'react';
import './App.css';
import headerPicture from "./header.jpg";
import { NavLink } from 'react-router-dom';

function Navbar() {
  
  return (
    <div className="App">
      <img src={headerPicture} alt="headerPicture" className="header-img">
      </img>
      <div className="row-navbar">
          <NavLink to="/home" className="navbar-style grow">Erik + Anna</NavLink>
          <NavLink to="/venue" className="navbar-style grow">Venue</NavLink>
          <NavLink to="/registry" className="navbar-style grow">Registry</NavLink>
          <NavLink to="/song-request" className="navbar-style grow">Submit a song</NavLink>
          <NavLink to="/submit-a-picture" className="navbar-style grow">Submit a picture</NavLink>
          {/* <a href="/rsvp" className="navbar-style grow">RSVP</a> */}
        </div>
    </div>
  );
}

export default Navbar;