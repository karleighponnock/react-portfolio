import React, { useState, useEffect } from "react";
import "../../index.css";
import "./index.css";
import Card from "../../components/Card"
import Portrait from "../../assets/portrait.jpg"
import Lists from "../../components/Lists";


function Main() {

  return (
    <div>
      <div>
  
          <Card>
           <div className="image-text-container">
            <img className="portrait" src={Portrait} alt="Photo of Karleigh"/>
            <p className="about"> Hello, my name is Karleigh Ponnock and I am a dedicated Entry Level Web Developer looking for an opportunity to bring my skill set to the table and add building blocks to the development community. My background is in the visual arts both as a painter and tattoo artist. I have my Bachelor of Fine Arts and post graduation acquired full-stack programming skills such as JavaScript, CSS React, Node, Python and mySQL while earning a certificate in Full Stack Development through the University of Central Florida. My passion is in the visual user experience. I love dynamic web applications and see the web page much like a canvas that must balance beauty and simplicity I am self disciplined, passionate and have strong communication skills. Learning is an endless journey to me so any languages or technologies I am not familiar, or efficient with I am excited to pick up and add to my skill set.  I am seeking opportunities to utilize my programming skills in a quality, team-based environment where I can be of value and expand my knowledge as a developer. 
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
