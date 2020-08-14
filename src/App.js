import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main"
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/react-portfolio/" component={Main} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;