import React, { useState, useEffect } from "react";
import "../../../src/index.css";
import "./index.css";
import Card from "../../components/Card"
import Container from "../../components/Container"
import Portrait from "../../assets/portrait.jpg"
import Lists from "../../components/Lists";


function Main() {

  return (
    <div>
      <div>
  
          <Card>
           <div className="image-text-container">
            <p className="about"> 
            <a className="links" href="https://github.com/karleighponnock" target="_blank">GitHub</a> 
    <a className="links" href="https://www.linkedin.com/in/karleigh-ponnock-3601421aa/" target="_blank">LinkedIn</a>
    <a className="links"
      href="https://docs.google.com/document/d/1nhMwVQVr0lIefWRi2h9tlmh3rqfbBwkMO2wttVO6wJk/edit?usp=sharing"
      target="_blank">Portfolio</a>
           </p>
           <div className="list">
           <Lists />
           </div>
           </div>
          </Card>
      </div>

    </div>
  );
}


export default Main;
