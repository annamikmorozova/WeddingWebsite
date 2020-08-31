import React from "react";
import {connect} from 'react-redux';
import './App.css';
import {newSongThunk} from "./store"

class Song extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            artist: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.newSongThunk(this.state);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

    render() {
        console.log(this.state)
        return (
            <div class="click-animations">
                <h2 class="new-section">Submit a song</h2>
                <form>
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
                    <button>Send</button>
                </form>
            </div>
        )
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        newSongThunk: (song) => dispatch(newSongThunk(song)),
    };
  };

export default connect(null, mapDispatchToProps)(Song);