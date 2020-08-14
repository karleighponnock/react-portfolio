import React, { useState, useEffect } from "react";
import "../../index.css";
import "./index.css";
import Card from "../../components/Card"
import Container from "../../components/Container"
import Portrait from "../../assets/portrait.jpg"
import Lists from "../../components/Lists";


function Main() {

  return (
    <div>
      <Card>
        <div className="image-text-container">
          
          <a class="email" href="mailto:KarleighPonnock@gmail.com?subject=Subject">
            Send an E-mail</a>
        </div>
      </Card>
    </div>
)}
       


export default Main;
