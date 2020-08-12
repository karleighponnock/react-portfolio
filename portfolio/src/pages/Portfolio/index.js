import React, { Component, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Card from "../../components/Card"
import Projects from "../../components/Carosel"

function Portfolio() {
  const [project, setProject] = useState(1)



  return (
    <div>
      <Projects
        project={project}
        setProject={setProject}
        // example prop
        name={"Your Name"}
      />
    </div>
  );
}

export default Portfolio;
