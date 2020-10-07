import React from "react";
import './App.css';
import {Col} from "react-bootstrap";
import axios from "axios";

export default class DisplayImages extends React.Component {
    constructor() {
        super();
        this.state= {
            images: []
        }
    }
    componentWillMount() {
        axios.get("/api/images").then(resp => {
            this.setState({images: resp.data})
        })
    }

    render() {
        return (
            <div>
                {this.state.images.map(image => (
                    <div className="all-images">
                        <Col key={image.id}>
                            <img className="one-image" alt={image.description.slice(0, 5)} src={`/${image.imageName.slice(8)}`} />
                            <div>{image.description}</div>
                        </Col>
                    </div>
                ))}
            </div>
        )
    }
}