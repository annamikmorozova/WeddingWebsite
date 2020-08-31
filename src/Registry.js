import React from "react";
import './App.css';
import amazonRegistry from "./amazon-registry.png";
import bloomies from "./bloomingdales.jpg";

function Registry() {
    return (
        <div>
            <h1 className="registry-title">Registry</h1>
            <div className="row-registry">
                <img src={amazonRegistry} alt="amazon-registry" className="size-image-amazon"/>
                <img src={bloomies} alt="bloomies" className="size-image"/>
            </div>
        </div>
    )
}

export default Registry;