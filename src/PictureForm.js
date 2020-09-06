import React from "react";
import './App.css';
// import {connect} from "react-redux";

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

    handleSubmit(event) {
		event.preventDefault();
		const form = new FormData();
		form.append("description", this.state.description);
		form.append("image", this.state.image);
		// this.props.newPictureForm(form);
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
                <form className="pictures-form">
                    <input 
                        id="image" 
                        className="form-control"
                        type="text" 
                        required=""
                        placeholder="Where and when was it?" 
                        value={this.state.image}
                        onChange={this.handleInputChange}
                    />
                    
                    <div className="col-md-6 form-labels-style">
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
				</div>
                </form>
                <button>Send</button>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		newPictureForm: data => dispatch(newPictureForm(data))
// 	};
// };

// export default connect(null, mapDispatchToProps)(PictureForm);