import React from 'react'
import "../App.css";
import { Row, Col } from "react-bootstrap";

export default function SearchForm() {
  return (
    <Row>
          <div className="searchForm">
            <Row style={{ paddingTop: 20 }}>
              <Col sm="2">
                <h3>Location</h3>
              </Col>
              <Col sm="2">
                <h3>Religion</h3>
              </Col>
              <Col sm="2">
                <h3>Year</h3>
              </Col>
              <Col sm="2">
                <h3>Type</h3>
              </Col>
              <Col style={{ textAlign: "center" }} sm="4">
                <button>Search</button>
              </Col>
            </Row>
          </div>
        </Row>
  )
}
