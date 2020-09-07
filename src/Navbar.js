import React from 'react';
import './App.css';
import headerPicture from "./header.jpg" 

function Navbar() {
  
  return (
    <div className="App">
      <img src={headerPicture} alt="headerPicture" className="header-img">
      </img>
      <div className="row-navbar">
          <a href="/" className="navbar-style grow">Erik + Anna</a>
          <a href="/venue" className="navbar-style grow">Venue</a>
          <a href="/registry" className="navbar-style grow">Registry</a>
          <a href="/song-request" className="navbar-style grow">Submit a song</a>
          <a href="/submit-a-picture" className="navbar-style grow">Submit a picture</a>
          {/* <a href="/rsvp" className="navbar-style grow">RSVP</a> */}
        </div>
    </div>
  );
}

export default Navbar;