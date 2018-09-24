import React from "react"

import "./results.css"

const Results = (props) => (
 <div className="container">
     <div className="card">

        <div className="card-header">
            <strong><i className="fa fa-table"></i>Results</strong>   
        </div>

        <div className="card-body" id="article-section">
            <ul className="list-group">
                {props.children}
            </ul>
        </div>

    </div>
 </div>
   
);

export default Results;