import React from "react";
import './App.css';
import GlenCove from "./glen-cove.jpg";
import Footer from "./Footer";

export default class Venue extends React.Component {
    render() {
        return (
            <div>
                <div className="title-glen-cove">Glen Cove Mansion</div>
                <a className="check-out-venue grow" target="_blank" rel="noopener noreferrer" href="https://themansionatglencove.com/">Check out the Venue</a>
                <div className="glen-cove">
                    <img className="image-glen-cove" src={GlenCove} alt="GlenCove" />
                </div>
                <div className="title-glen-cove">Directions</div>
                <div className="map-row ">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11163.059675180439!2d-73.63304698768195!3d40.886268830662594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2853f41f0b1cf%3A0x58d3b7e4a47f5708!2sThe%20Mansion%20at%20Glen%20Cove!5e0!3m2!1sen!2sus!4v1599187381334!5m2!1sen!2sus"
                        width="700" 
                        title="map"
                        height="300" 
                        className="map"
                        rameborder="0" 
                        allowfullscreen="" 
                        aria-hidden="false" 
                        tabindex="0">
                    </iframe>
                </div>
                <Footer />
            </div>
        )
    }
}