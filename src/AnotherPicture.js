import React from 'react';
import './App.css';
import Footer from "./Footer";
import { Redirect } from "react-router-dom";

export default class AnotherPicture extends React.Component {
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
                        <h2 class="new-section">Do you want to submit another picture?</h2>
                        <button type="submit" onClick={(event) => this.handleSubmit(event)}>DO IT!</button>
                    </div>
                    <Footer />
                </div>
        )
    }
}