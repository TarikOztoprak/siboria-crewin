import React from 'react'

import "../App.css";
import { Row, Col } from "react-bootstrap";
import Logo from "./siboria.png";
import Instagram from "./instagram.png"
import Facebook from "./facebook.png"
import Twitter from "./twitter.png"

export default function Footer() {
  return (
    <Row style={{ marginTop: 100 }}>
    <Col sm="2">
      <img src={Logo} alt="logo"></img>
    </Col>
    <Col sm="8">
      <Row style={{ paddingTop: 10 }}>
        <Col md="1"></Col>
        <Col md="2" className="Link">
          Home
        </Col>
        <Col md="2" className="Link">
          Collections
        </Col>
        <Col md="2" className="Link">
          How We Collect
        </Col>
        <Col md="2" className="Link">
          Sell An Antique
        </Col>
        <Col md="2" className="Link">
          Blog
        </Col>
        <Col md="1"></Col>
      </Row>
    </Col>
    <Col sm="2">
        <img style={{marginRight: 20}} src={Facebook} alt= "social-media"></img>
        <img style={{marginRight: 20}} src={Instagram} alt= "social-media"></img>
        <img src={Twitter} alt= "social-media"></img>
    </Col>
  </Row>
  )
}
