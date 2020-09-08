import React from "react";
import './App.css';
import amazonRegistry from "./amazon-registry.png";
import bloomies from "./bloomingdales.jpg";
import {RiHeartsLine} from "react-icons/ri";
import {SiChase} from "react-icons/si";
import { Icon, InlineIcon } from '@iconify/react';
import venmoIcon from '@iconify/icons-mdi/venmo';
import {RiMoneyDollarBoxLine} from "react-icons/ri";

export default function Registry() {

    return (
        <div>
            <div className="registry-thank-you">
                <RiHeartsLine color="pink" size={60}/>  
                    Please know that your presence at our wedding is present enough!
                    However, for friends and family who have been asking for gift ideas, 
                    we have created a few options. We love you all and 
                    appreciate any kinds of gifts and we thank you in advance!
                <RiHeartsLine color="pink" size={60}/>
            </div>

            <div className="registry-title">Honeymoon Fund</div>
            <div className="cash-row">
                <div className="venmo-col">
                    <Icon icon={venmoIcon} color="navy" width="32px" height="42px" />
                    <a href="https://venmo.com/" target="_blank" rel="noopener noreferrer" className="cash-options">@Erik-Yeomans</a>
                </div>

                <div className="venmo-col">
                    <SiChase color="navy" size={32}/>
                    <div className="cash-options">Zelle: 917-855-9050</div>
                </div>

                <div className="venmo-col">
                    <RiMoneyDollarBoxLine color="navy" size={32}/>
                    <div className="cash-options">Cash/Check is very appreciated</div>
                </div>
            </div>

            <div>
            <div className="registry-title-2">Registry</div>
                <div className="row-registry">
                    <a href="https://www.amazon.com/wedding/share/anna-get-yeomans" target="_blank" rel="noopener noreferrer">
                        <img src={amazonRegistry} alt="amazon-registry" className="size-image-amazon"/>
                    </a>
                    <a href="https://www.bloomingdales.com/registry/wedding/guest/?registryId=7213572" target="_blank" rel="noopener noreferrer">
                        <img src={bloomies} alt="bloomies" className="size-image"/>
                    </a>
                </div>
            </div>
        </div>
    )
}