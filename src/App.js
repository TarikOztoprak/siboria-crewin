import Navigator from "./components/Navigator";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Logo from "./components/siboria.png";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TopCategories from "./components/TopCategories";
import BuyersFeedback from "./components/BuyersFeedback";
import MailSection from "./components/MailSection";

function App() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Navigator />
      <Container>
        <Header />

        <SearchForm />

        <Row style={{ marginTop: 100 }}>
          <h1>Recently Added</h1>
        </Row>

        <TopCategories />

        <BuyersFeedback />

        <MailSection />

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
          <Col sm="2"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
