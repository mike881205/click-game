import React from "react";
import "./style.css";

function Scores(props) {
    return (
        <div className="scores row">
            <div className="col-sm">
                <h3 >Score: {props.score} </h3>
            </div>
            <div className="col-sm">
                <h3>Top Score: {props.topScore}</h3>
            </div>
        </div>
    );
}

export default Scores;
