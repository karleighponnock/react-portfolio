import React from "react";
import Card from "../Card"
import "./style.css";

const Projects = ({ project, setProject, name }) => {
    if (project === 1) {
        return (

            <Card>
                <Card>
                    <iframe className="frame" src="https://lamcnguyen89.github.io/Project-01--The-Electric-Art-Gallery/" width="100%" height="600px" frameborder="0" scrolling="yes"></iframe>
                </Card>
                <button className="browse" onClick={() => setProject(2)}> next </button>
                <button className="browse" onClick={() => setProject(4)}> back </button>
            </Card>
        )
    } else if (project === 2) {
        return (
            <Card>
                <Card>
                    <iframe className="frame" src="https://house-our-heroes.herokuapp.com/" width="100%" height="600px" frameborder="0" scrolling="yes"></iframe>
                </Card>
                <button className="browse" onClick={() => setProject(3)}> next </button>
                <button className="browse" onClick={() => setProject(1)}> back </button>
            </Card>
        )
    } else if (project === 3) {
        return (
            <Card>
                <Card >
                    <iframe className="frame" src="https://protected-tor-91451.herokuapp.com/" width="100%" height="600px" frameborder="0" scrolling="yes" className="budget"></iframe>
                </Card>
                <button className="browse" onClick={() => setProject(4)}> next </button>
                <button className="browse" onClick={() => setProject(2)}> back </button>
            </Card>

        )
    } else if (project === 4) {
        return (
            <Card>
                <Card>
                    <iframe className="frame" src="https://shielded-hamlet-39897.herokuapp.com/" width="100%" height="600px" frameborder="0" scrolling="yes"></iframe>
                </Card>
                <button className="browse" onClick={() => setProject(1)}> next </button>
                <button className="browse" onClick={() => setProject(3)}> back </button>
            </Card>

        )
    }
}

export default Projects;