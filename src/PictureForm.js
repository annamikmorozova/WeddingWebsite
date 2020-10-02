import React from "react";
import './App.css';
import axios from "axios";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";

export default class PictureForm extends React.Component {
    constructor() {
        super();
        this.state = {
            description: "",
            image: "",
            redirect: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const form = new FormData();
        form.append("description", this.state.description);
        form.append("image", this.state.image);
        console.log(...form.entries())
        await axios({
            method: "post",
            url: "/api/images",
            data: form,
            config: {headers: {"Content-Type": "multipart/form-data"}}
        });
        this.setState({
            redirect: true
        })
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
        if (this.state.redirect) {
            return <Redirect to="/another-picture" />
        }
        return (
            <div className="click-animations">
                <div className="form-background">
                    <h2 class="new-section">Submit a picture with us</h2>
                    <form className="pictures-form" onSubmit={this.handleSubmit}>

                        <label className="labels-text" htmlFor="description">Tell us about the picture</label>
                            <input 
                                id="description" 
                                type="text" 
                                name="description"
                                required=""
                                placeholder="Where and when was it?" 
                                value={this.state.description}
                                onChange={this.handleInputChange}
                            />
                    
                   
                        <label className="labels-text" htmlFor="img">Select Image</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                className="file-input"
                                accept="image/*"
                                placeholder="image"
                                required=""
                                onChange={this.handleFileChange}
                            />

	                    <button>Send</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}