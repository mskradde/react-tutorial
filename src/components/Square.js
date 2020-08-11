import "./square.css";
import React from "react";

export default function Square() {
  const [value, setValue] = React.useState(null);

  return (
    <button
      className="square"
      onClick={() => {
        setValue("X");
      }}
    >
      {value}
    </button>
  );
}
