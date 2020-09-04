import React from "react";
import './App.css';
import axios from "axios";

export default class Song extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            artist: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        await axios.post("/api/songs", this.state)
        alert("song added")
        //TODO: do something cool here
    }

    handleInputChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
      }

    render() {
        return (
            <div class="click-animations">
                <h2 class="new-section">Submit a song</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        id="name" 
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        type="text" 
                        name="artist"
                        placeholder="Artist" 
                        id="artist"
                        value={this.state.artist}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}