import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

import Mail from "../mail.png";
import Send from "./send.png"

export default function MailSection() {
  return (
    <Row style={{ marginTop: 50 }} className="mailSection">
    <Col sm="1"></Col>
    <Col sm="6">
      <h1 className="mail">Subscribe our newsletter</h1>
      <p className="mail">
        Reciev latest news, update, and many other things every week.
      </p>
      <br />
      <input placeholder="Enter Your email address" className="mailInput"></input>
      <button style={{width: 50, height: 50}} className="btnn"> <img src={Send} alt="send"></img></button>
  
      
       
    </Col>
    <Col style={{ textAlign: "center" }}>
      <img
        style={{ position: "relative", top: "-300px", width: "207px" }}
        src={Mail}
        alt="mail"
      ></img>
    </Col>
  </Row>
  )
}
