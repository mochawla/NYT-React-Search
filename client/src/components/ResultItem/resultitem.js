import React from "react";

import "./resultitem.css"

const ResultItem = (props) => (
 <div className="container">
     <li>
        <h3>{props.title}</h3>
        <p>Published on {props.date}</p>
        <a href={props.url}>link</a>
    </li>
 </div>
)

export default ResultItem;