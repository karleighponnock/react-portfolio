import React from "react";
import Card from "../Card"
import "./style.css";

const Projects = ({ project, setProject, name }) => {
    if (project === 1) {
        return (

            <Card>
                <button className="browse" onClick={() => setProject(2)}> next </button>
                <button className="browse" onClick={() => setProject(4)}> back </button>
                <a className="external-link" href="https://karleighponnock.github.io/BLACK-MEDICINE-TATU/" target="__blank" >Click here to visit site outside of webpage</a>
                <Card>
                    <iframe className="frame" src="https://karleighponnock.github.io/BLACK-MEDICINE-TATU/" width="100%" height="600px" frameborder="0" scrolling="yes"></iframe>
                </Card>
            </Card>
        )
    } else if (project === 2) {
        return (
            <Card>
                <button className="browse" onClick={() => setProject(3)}> next </button>
                <button className="browse" onClick={() => setProject(1)}> back </button>
                <a className="external-link" href="https://lamcnguyen89.github.io/Project-01--The-Electric-Art-Gallery/" target="__blank" >Click here to visit site outside of webpage</a>
                <Card>
                    <iframe className="frame" src="https://lamcnguyen89.github.io/Project-01--The-Electric-Art-Gallery/" width="100%" height="600px" frameborder="0" scrolling="yes"></iframe>
                </Card>
            </Card>
        )
    } else if (project === 3) {
        return (
            <Card>
                 <button className="browse" onClick={() => setProject(4)}> next </button>
                <button className="browse" onClick={() => setProject(2)}> back </button>
                <a className="external-link" href="https://protected-tor-91451.herokuapp.com/" target="__blank" >Click here to visit site outside of webpage</a>
                <Card >
                    <iframe className="frame" src="https://protected-tor-91451.herokuapp.com/" width="100%" height="600px" frameborder="0" scrolling="yes" className="budget"></iframe>
                </Card>
            </Card>

        )
    } else if (project === 4) {
        return (
            <Card>
                <button className="browse" onClick={() => setProject(1)}> next </button>
                <button className="browse" onClick={() => setProject(3)}> back </button>
                <a className="external-link" href="https://shielded-hamlet-39897.herokuapp.com/" target="__blank" >Click here to visit site outside of webpage</a>
                <Card>
                    <iframe className="frame" src="https://shielded-hamlet-39897.herokuapp.com/" width="100%" height="600px" frameborder="0" scrolling="yes"></iframe>
                </Card>
            </Card>

        )
    }
}

export default Projects;