import "./square.css";
import React from "react";

export default function Square(props) {
  // const [value, setValue] = React.useState(null);

  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
