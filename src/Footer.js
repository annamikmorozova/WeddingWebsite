import React from 'react';
import './App.css';
import { AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
    return (
        <div className="footer">
            <p><AiOutlineCopyright size={12}/>Anna Morozova and Erik Yeomans</p>
            <a className="github" 
                href="https://github.com/annamikmorozova/WeddingWebsite" 
                target="_blank" 
                rel="noopener noreferrer">Github
            </a>
        </div>
    )
}