import "./Class.css";
import React from "react";

function Class(props) {
  return (
    <div className="class">
      <h1>kids number:{props.kids}</h1>
      <h1>class:{props.class}</h1>
      <h1>Teacher:{props.teacher}</h1>
    </div>
  );
};

export default Class;
