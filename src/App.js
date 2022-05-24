import Navigator from "./components/Navigator";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Container } from "react-bootstrap";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TopCategories from "./components/TopCategories";
import BuyersFeedback from "./components/BuyersFeedback";
import MailSection from "./components/MailSection";
import SiteMap from "./components/SiteMap";
import Footer from "./components/Footer";
import RecentlyAdded from "./components/RecentlyAdded";
function App() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Navigator />
      <Container>
        <Header />

        <SearchForm />

        <RecentlyAdded/>

        <TopCategories />

        <BuyersFeedback />

        <MailSection />

        <SiteMap/>

        <Footer/>
       
      </Container>
    </div>
  );
}

export default App;
