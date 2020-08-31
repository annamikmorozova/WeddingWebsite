import React from 'react';
import './App.css';
import {FaHashtag} from "react-icons/fa";

function Navbar() {
  
  return (
    <div className="App">
      <header className="header-container">
        <h1 className="title">Erik and Anna</h1>
        <p className="date">9/18/2021</p>
        <div className="hashtag">< FaHashtag />AnnaGetYeomans</div>
        <div className="row-navbar">
        <a href="/" className="navbar-style">Erik + Anna</a>
         <a href="/venue" className="navbar-style">Venue</a>
          <a href="/registry" className="navbar-style">Registry</a>
          <a href="/song-request" className="navbar-style">Submit a song</a>
          <a href="/rsvp" className="navbar-style">RSVP</a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;