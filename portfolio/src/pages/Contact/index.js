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
      <Card>
        
          <div class="sites">
            <a className="links" href="https://github.com/karleighponnock" target="_blank">GitHub</a>
            <a className="links" href="https://www.linkedin.com/in/karleigh-ponnock-3601421aa/" target="_blank">LinkedIn</a>
            <a className="links"
              href="https://docs.google.com/document/d/1nhMwVQVr0lIefWRi2h9tlmh3rqfbBwkMO2wttVO6wJk/edit?usp=sharing"
              target="_blank">Portfolio</a>
        </div>
      
    
        <div className="image-text-container">


          <a class="email" href="mailto:KarleighPonnock@gmail.com?subject=E-mail Me! ">
            E-mail Me</a>
        </div>
      </Card>
    </div>
)}
       


export default Main;
