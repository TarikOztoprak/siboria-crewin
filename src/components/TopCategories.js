import React from "react";

import "../App.css";
import Skull from "./skull.png";
import Statue from "./statue.png";
import Keep from "./keep.png";
import Chair from "./chair.png";
import { Row, Col } from "react-bootstrap";

export default function TopCategories() {
  return (
    <Row style={{ marginTop: 100 }}>
      <h1>Top Categories</h1>
      <p>
        Party we years to order allow asked of. We so opiniıo firends me message
        as delight.{" "}
      </p>
      <Col sm="3">
        <div className="topCategories">
          <div className="categorieBadge">122</div>
          <img src={Skull} alt="Skull"></img>
          <h1>Weapons</h1>
          <p>Worefall</p>
        </div>
        <br />
        <div className="topCategories">
          <div className="categorieBadge">71</div>
          <img src={Skull} alt="Skull"></img>
          <h1>Skulls</h1>
          <p>Worefall</p>
        </div>
      </Col>
      <Col sm="4">
        <div className="topCategories2">
          <div className="categorieBadge">35</div>
          <img src={Statue} alt="Statue"></img>
          <h1>Statues</h1>
          <p>Worefall</p>
        </div>
      </Col>
      <Col sm="5">
        <div className="topCategories">
          <div className="categorieBadge">413</div>
          <img src={Keep} alt="Skull"></img>
          <h1>Keep</h1>
          <p>Worefall</p>
        </div>
        <br />
        <Row>
          <Col sm="5">
            <div className="topCategories">
              <div className="categorieBadge">98</div>
              <img src={Chair} alt="Skull"></img>
              <h1>Watches</h1>
              <p>Worefall</p>
            </div>
          </Col>
          <Col sm="7">
            <div className="topCategories">
              <div className="categorieBadge">812</div>
              <img src={Chair} alt="Skull"></img>
              <h1>Furniture</h1>
              <p>Worefall</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
