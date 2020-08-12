import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../../src/index.css";
import "./index.css";
import Card from "../../components/Card"
import Container from "../../components/Container"
import portrait from "../../assets/portrait.PNG"


function Main() {

  return (
    <div>
      <div>
  
          <Card>
           <div className="image-text-container">
            <img className="portrait" src={portrait} />
            <p className="about"> My name is Karleigh. I am a 24 year old coding student. I live and work in Miami, Florida. My background is
            in visual arts, however I work across many artistic mediums. I am hoping to take my creative process to the
            next level by incorperating programming into my tool belt. My portfolio is currently a gallery of paintings
            done by myself. As I create coding projects I will replace the paintings with my coding portfolio! This is
            only the begining of my coding journey, come along!
           </p>
           </div>
          </Card>
      </div>

    </div>
  );
}


export default Main;
