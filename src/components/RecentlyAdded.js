import React from "react";
import Skull from "./skull.png";
import Keep from "./keep.png";
import Chair from "./chair.png";
import { Row, Col } from "react-bootstrap";
export default function RecentlyAdded() {
  let data = [
    {
      id: 1,
      name: "Data1",
      year: 1192,
      categorie: "Weapons",
      price: 895.5,
      bids: 12,
      closeIn: 12,
      image: Skull,
    },
    {
      id: 2,
      name: "Data2",
      year: 1078,
      categorie: "Weapons",
      price: 759,
      bids: 14,
      closeIn: 12,
      image: Keep,
    },
    {
      id: 3,
      name: "Data3",
      year: 1256,
      categorie: "Weapons",
      price: 895.5,
      bids: 16,
      closeIn: 12,
      image: Chair,
    },
  ];
  return (
    <Row style={{ marginTop: 100 }}>
      <h1>Recently Added</h1>
      {data.map((item) => (
        <Col sm="4" key={item.id}>
          <div className="recentlyAdded">
            <div style={{ textAlign: "center", backgroundColor: "#FAFAFA" }}>
              <img src={item.image} alt={item.name}></img>
            </div>
            <h1>{item.name} </h1>
            <p>
              Year: {item.year} | {item.categorie}{" "}
            </p>
            <Row>
              <Col xs="6">
                <h1 className="recentlyAdded price">$ {item.price}</h1>
                <p className="recentlyAdded bid">{item.bids} bids do far</p>
              </Col>
              <Col xs="6">
                <button>View Details</button>
                <br/>
                <p>Bidding closes in {item.closeIn} Days </p>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  );
}
