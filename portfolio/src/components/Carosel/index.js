import React from "react";
import Card from "../../components/Card"
import ProjOne from "../../assets/art-project.png"
import ProjTwo from "../../assets/house.png"
import "./style.css";

const Projects = ({ project, setProject, name }) => {
    if (project === 1) {
        return (

            <Card className="projectCard">
                <Card>
                    <iframe className="frame" src={ProjOne}>
                    </iframe>
                </Card>
                <button className="browse" onClick={() => setProject(2)}> next </button>
                <button className="browse" onClick={() => setProject(4)}> back </button>
            </Card>
        )
    } else if (project === 2) {
        return (
            <Card>
                <Card className="projectCard">
                    <iframe className="frame" src={ProjTwo}>
                    </iframe>
                </Card>
                <button onClick={() => setProject(3)}> > </button>
            </Card>
        )
    } else if (project === 3) {
        return (
            <Card className="projectCard">
                <Card>
                    <img src={ProjOne} />
                </Card>
                <button onClick={() => setProject(4)}> > </button>
            </Card>

        )
    } else if (project === 4) {
        return (
            <Card className="projectCard">
                <Card>
                    <img src={ProjOne} />
                </Card>
                <button onClick={() => setProject(1)}> > </button>
            </Card>

        )
    }
}

export default Projects;