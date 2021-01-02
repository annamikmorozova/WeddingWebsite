import React from "react";
import './App.css';
import {Col, Row} from "react-bootstrap";

export default class WeddingParty extends React.Component {
    render() {
        return (
           <div>
                <div className="party-page-title">Meet our wedding party!</div>
                <Row>
                    <Col className="party-col">
                        <p className="party-p">Maid of Honor:</p>
                        <p className="party-people">Alisa Morozova</p>
                        <p className="party-p">Bridesmaids:</p>
                        <p className="party-people">Aibika Sperl</p>
                        <p className="party-people">Victoria Kuznetsova</p>
                        <p className="party-people">Liz Carney</p>
                        <p className="party-people">Salonika Bose</p>
                        <p className="party-people">Nancy Yeomans</p>
                        <p className="party-people">Jessica Livianu</p>
                    </Col>
                    <Col className="party-col">
                        <p className="party-p">Best Man:</p>
                        <p className="party-people">Nick Miller</p>
                        <p className="party-p">Groomsmen:</p>
                        <p className="party-people">Ben Kapp</p>
                        <p className="party-people">Raul Martinez</p>
                        <p className="party-people">Isaac Reath</p>
                        <p className="party-people">Jason Yeomans</p>
                        <p className="party-people">Taylor Yeomans</p>
                        <p className="party-people">Ryan Peden</p>
                    </Col>
                </Row>
           </div>
        )
    }
}