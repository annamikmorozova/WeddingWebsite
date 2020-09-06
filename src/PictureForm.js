import React from "react";
import './App.css';
import axios from "axios";

export default class PictureForm extends React.Component {
    constructor() {
        super();
        this.state = {
            description: "",
            image: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
    }

    async handleSubmit(event, data) {
        event.preventDefault();
        const form = new FormData();
        form.append("description", this.state.description);
        form.append("image", this.state.image);
        await axios({
            method: "post",
            url: "/api/images",
            data,
            config: {headers: {"Content-Type": "multipart/form-data"}}
        });
        await axios.get("/api/images");
        alert("picture's added")
	}

	handleInputChange(event) {
		event.preventDefault();
		this.setState({[event.target.name]: event.target.value});
	}

    handleFileChange(event) {
		event.preventDefault();
		this.setState({image: event.target.files[0]});
	}

    render() {
        return (
            <div class="click-animations">
                <h2 class="new-section">Submit a picture with us</h2>
                <form className="pictures-form" onSubmit={this.handleSubmit}>

                <label htmlFor="description">Tell us about the picture</label>
                    <input 
                        id="description" 
                        type="text" 
                        name="description"
                        required=""
                        placeholder="Where and when was it?" 
                        value={this.state.description}
                        onChange={this.handleInputChange}
                    />
                    
                   
					<label htmlFor="img">Select Image</label>
                        <input
                            type="file"
                            name="image"
                            className="form-control"
                            id="image"
                            accept="image/*"
                            placeholder="image"
                            required=""
                            onChange={this.handleFileChange}
                        />

	                    <button>Send</button>
                </form>
            </div>
        )
    }
}