import React from "react";
import Logo from "./siboria.png";
import "../App.css"
import { Container, Row, Col } from "react-bootstrap";
export default function Navigator() {
  return (
    <Container style={{paddingTop: 30}}>
      <Row>
        <Col sm="2">
          <img src={Logo} alt="logo"></img>
        </Col>
        <Col sm="8">
            <Row style={{paddingTop: 10}}>
                <Col md="1" ></Col>
                <Col md="2" className="Link">Home</Col>
                <Col md="2" className="Link">Collections</Col>
                <Col md="2" className="Link">How We Collect</Col>
                <Col md="2" className="Link">Sell An Antique</Col>
                <Col md="2" className="Link">Blog</Col>
                <Col md="1"></Col>
            </Row>
        </Col>
        <Col sm="2">
          <button className="btnn">Our Collections</button>
        </Col>
      </Row>
    </Container>
  );
}
