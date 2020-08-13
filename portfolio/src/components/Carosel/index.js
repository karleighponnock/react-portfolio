import React from "react";
import Card from "../../components/Card"
import ProjOne from "../../assets/art-project.png"

const Projects = ({ project, setProject, name }) => {
    if (project === 1) {
        return (
            <Card>
                <img src={ProjOne} />
                <button onClick={() => setProject(2)}> > </button>
            </Card>
        )
    } else if (project === 2) {
        return (
            <Card>
                <img src={ProjOne} />
                <button onClick={() => setProject(3)}> > </button>
            </Card>
        )
    } else if (project === 3) {
        return (
            <Card>
                <img src={ProjOne} />
                <button onClick={() => setProject(4)}> > </button>
            </Card>
        )
    } else if (project === 4) {
        return (
            <Card>
                <img src={ProjOne} />
                <button onClick={() => setProject(1)}> > </button>
            </Card>
        )
    }
}

export default Projects;