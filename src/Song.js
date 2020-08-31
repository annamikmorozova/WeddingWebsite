import React from "react";
import './App.css';

class Song extends React.Component {

    render() {
        return (
            <div class="click-animations">
                <h2 class="new-section">Submit a song</h2>
                <form>
                    <input type="text" placeholder="Name" id="name" />
                    <input type="text" placeholder="Artist" id="artist" />
                </form>
                <button>Send</button>
            </div>
        )
    }
}

export default Song;