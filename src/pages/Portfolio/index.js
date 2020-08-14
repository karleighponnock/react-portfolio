import React, { Component, useState } from 'react';
import Projects from "../../components/Carosel"
import "../../index.css";

function Portfolio() {
  const [project, setProject] = useState(1)



  return (
    <div>
      <Projects
        project={project}
        setProject={setProject}
      />
    </div>
  );
}

export default Portfolio;