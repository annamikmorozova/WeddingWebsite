import React from "react";
import './App.css';
import amazonRegistry from "./amazon-registry.png";
import bloomies from "./bloomingdales.jpg";

function Registry() {
    return (
        <div>
            <h1 className="registry-title">Registry</h1>
            <div className="row-registry">
                <a href="https://www.amazon.com/wedding/share/anna-get-yeomans" target="_blank" rel="noopener noreferrer">
                    <img src={amazonRegistry} alt="amazon-registry" className="size-image-amazon"/>
                </a>
                <a href="https://www.bloomingdales.com/registry/wedding/guest/?registryId=7213572" target="_blank" rel="noopener noreferrer">
                    <img src={bloomies} alt="bloomies" className="size-image"/>
                </a>
            </div>
        </div>
    )
}

export default Registry;