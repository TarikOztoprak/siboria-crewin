import React from 'react'
import "../App.css";
import Search from './search.png'
import { Container, Row, Col } from "react-bootstrap";

export default function SearchForm() {
  return (
    <Row>
          <div className="searchForm">
            <Container>
            <Row style={{ paddingTop: 20 }}>
              <Col sm="2">
                <h3 className='searchFormHeader'>Location</h3>
                <select className='searchFormSelection'>
                  <option>Norway</option>
                  <option>Turkey</option>
                  <option>United Kingdom</option>
                </select>
              </Col>
              <Col sm="2">
                <h3 className='searchFormHeader'>Religion</h3>
                <select className='searchFormSelection'>
                  <option>Asatro</option>
                  <option>Religion</option>
                  <option>Religion 2</option>
                </select>
              </Col>
              <Col sm="2">
                <h3 className='searchFormHeader'>Year</h3>
                <select className='searchFormSelection'>
                  <option>793 AD</option>
                  <option>900 AD</option>
                  <option>500 AD</option>
                </select>
              </Col>
              <Col sm="2">
                <h3 className='searchFormHeader'>Type</h3>
                <select className='searchFormSelection'>
                  <option>Weapons</option>
                  <option>Antique</option>
                  <option>Skull</option>
                </select>
              </Col>
              <Col style={{ textAlign: "center" }} sm="4">
                <button className='searchFormButton'><img src={Search} alt="search"></img>{"  "}Search</button>
              </Col>
            </Row>
            </Container>
          </div>
        </Row>
  )
}
