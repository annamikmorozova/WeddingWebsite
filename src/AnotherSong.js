import React from 'react';
import './App.css';
import Footer from "./Footer";
import { Redirect } from "react-router-dom";
import { FaRegLaughWink } from 'react-icons/fa';

export default class AnotherSong extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/song-request" />
        }
        return (
            <div className="click-animations">
                <div className="form-background">
                    <h2 className="new-section">Would you like to submit another song?</h2>
                    <div className="new-section-2"><FaRegLaughWink color="navy"/></div>
                    <button type="submit" onClick={(event) => this.handleSubmit(event)}>DO IT!</button>
                </div>
                <Footer />
            </div>
        )
    }
}