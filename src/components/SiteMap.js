import React from 'react'

import "../App.css";
import { Row, Col } from "react-bootstrap";

export default function SiteMap() {
  return (
    <Row style={{ marginTop: 100 }}>
          <Col sm="3">
            <h3>Resources</h3>
            <a className="siteMapLink" href="#download">
              Download
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#helpcenter">
              Help Center
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#download">
              Guide Book
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#download">
              App Directory
            </a>
            <br />
          </Col>
          <Col sm="3">
            <h3>Seboria</h3>
            <a className="siteMapLink" href="#download">
              Why Seboria
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#helpcenter">
              Our Collection Progress
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#download">
              Customer Stories
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#download">
              Instagram Post
            </a>
            <br />
          </Col>
          <Col sm="3">
            <h3>Comapany</h3>
            <a className="siteMapLink" href="#download">
              Antiques
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#helpcenter">
              Abour Seboria
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#download">
              Success
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#download">
              Information
            </a>
            <br />
          </Col>
          <Col sm="3">
            <h3>Get in Touch</h3>
            <a className="siteMapLink" href="#download">
              Feel free to get in touch with us
            </a>{" "}
            <br />
            <a className="siteMapLink" href="#helpcenter">
              vai emalil
            </a>{" "}
            <br />
            <a style={{color:'blue'}} className="siteMapLink" href="#download">
              shakir@gmail.com
            </a>{" "}
            <br />
    
            <br />
          </Col>
        </Row>
  )
}
