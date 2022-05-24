import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import BuyersFeedbackPic from "../BuyersFeedback.png";
import Selena from "../selena.png";
import Star from "./star.png"

export default function BuyersFeedback() {
  return (
    <Row style={{ marginTop: 100 }}>
      <Col style={{ textAlign: "center" }} md="5">
        <img style={{maxWidth: '100%'}}  src={BuyersFeedbackPic} alt="BuyersFeedback"></img>
      </Col>
      <Col md="7">
        <h1 >Buyer's Feedback</h1>
        <p>
          Whoe front da of piate heard ah ought. His defective nor convinced
          residense won. Conenction has put impossible own apartments
          boisterous.
        </p>
        <Row>
          <Col xs="2">
            <img className="avatar" src={Selena} alt="Selena"></img>
          </Col>
          <Col className="buyersFeedback" xs="10">
            <h3>Selena Hakim</h3>
            <p>UI Designer</p>
            <img src={Star} alt="star"></img> 
            <img src={Star} alt="star"></img> 
            <img src={Star} alt="star"></img> 
            <img src={Star} alt="star"></img> 
            <img src={Star} alt="star"></img>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
