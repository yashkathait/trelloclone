import React from "react";
import "./AddCardButton.css";

const AddCardButton = (props) => {
  return (
    <button
      className={props.className || " button"}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default AddCardButton;
