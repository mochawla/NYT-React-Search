import React from "react";

const Column = (props) => (
  <div className={props.size.split(" ").map(size => "col-" + size).join(" ")}>
    {props.children}
  </div>
);

export default Column;
