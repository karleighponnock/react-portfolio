import React from "react";
import Card from "../../components/Card"
import Portrait from "../../assets/portrait.PNG"

const Projects = ({ project, setProject, name }) => {
    if (project === 1) {
        return (
            <Card>
                <h1>Project 1</h1>
                {/* props example */}
                 {/* <h6>{name}</h6>  */}
                <img src={Portrait} />
                <button onClick={() => setProject(2)}> > </button>
            </Card>
        )
    } else if (project === 2) {
        return (
            <Card>
                <h1>Project 2</h1>
                <img src={Portrait} />
                <button onClick={() => setProject(3)}> > </button>
            </Card>
        )
    } else if (project === 3) {
        return (
            <Card>
                <h1>Project 3</h1>
                <img src={Portrait} />
                <button onClick={() => setProject(4)}> > </button>
            </Card>
        )
    } else if (project === 4) {
        return (
            <Card>
                <h1>Project 4</h1>
                <img src={Portrait} />
                <button onClick={() => setProject(1)}> > </button>
            </Card>
        )
    }
}

export default Projects;