import React from 'react'
import Vaso from "../vaso.png";
import "../App.css";
import { Row, Col } from "react-bootstrap";
export default function Header() {
  return (
    <Row>
          <Col style={{ paddingTop: 100 }} sm="6">
            <h1>World's Biggest</h1>
            <h1 className="blue">Antique Collection</h1>
            <p>
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distruts may instantly was household applauded
              incommode.
            </p>
            <button className='btnn'>Discover Now</button>
          </Col>
          <Col sm="4">
            <img style={{width: '100%'}} src={Vaso} alt="vaso"></img>
          </Col>
          <Col sm="2">
            <div className="whiteSquare"></div>
          </Col>
        </Row>
  )
}
