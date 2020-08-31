import React from "react";
import './App.css';

class RSVP extends React.Component {

    render() {
        return (
            <div class="click-animations">
                <h2 class="new-section">RSVP</h2>
                <form>
                    <input type="text" placeholder="First Name" id="firstName" />
                    <input type="text" placeholder="Last Name" id="lastName" />
                    <input type="text" placeholder="+ 1 first name" id="plusOnefname" />
                    <input type="text" placeholder="+ 1 last name" id="plusOnelname" />
                </form>
                <button>Send</button>
            </div>
        )
    }
}

export default RSVP;