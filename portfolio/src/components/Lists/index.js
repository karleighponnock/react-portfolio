import React from "react";
import "./style.css";

function Lists(props) {
    return (
        <div>
            <h2>Languages</h2>
            <ul>
                <li>HTML</li>
                <li>Javascript</li>
            </ul>
            <h2>Technologies</h2>
                <li>CSS</li>
                <li>React</li>
        

            {props.children}
        </div>
    );
}

export default Lists;
