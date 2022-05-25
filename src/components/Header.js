import React from "react";
import Vaso from "../vaso.png";
import Cup from "./cup.png";
import Share from "./share.png";
import Building from "./building.png";
import "../App.css";
import { Row, Col } from "react-bootstrap";
export default function Header() {

  let data1 = [{down: "year", head: 1322}, {down: "Bird so far ", head: 29 }, {down: "origin", head: "China"}];
  return (
    <Row>
      <Col style={{ paddingTop: 100 }} sm="6">
        <h1>World's Biggest</h1>
        <h1 className="blue">Antique Collection</h1>
        <p>
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distruts may instantly was household applauded
          incommode.
        </p>
        <button className="btnn">Discover Now</button>
      </Col>
      <Col sm="4">
        <img style={{ width: "100%" }} src={Vaso} alt="vaso"></img>
      </Col>
      <Col style={{ paddingTop: 100 }} sm="2">
        <Row>
          <Col xs="6">
            <div className="whiteSquare">
              <img src={Share} alt="share"></img>
            </div>
          </Col>
          <Col xs="6">
            <h1>{data1[0].head}</h1>
            <p className="">{data1[0].down}</p>
          </Col>
        </Row>

        <Row>
          <Col xs="6">
            <div className="whiteSquare">
              <img src={Cup} alt="Cup"></img>
            </div>
          </Col>
          <Col xs="6">
            <h1>{data1[1].head}</h1>
            <p className="">{data1[1].down}</p>
          </Col>
        </Row>

        <Row>
          <Col xs="6">
            <div className="whiteSquare">
              <img src={Building} alt="Building"></img>
            </div>
          </Col>
          <Col xs="6">
            <h1>{data1[2].head}</h1>
            <p className="">{data1[2].down}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
