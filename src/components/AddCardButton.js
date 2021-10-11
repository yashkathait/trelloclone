import React from "react";
import "./AddCardButton.css";

const AddCardButton = (props) => {
  return (
    <div>
      <button
        className={props.className || "addbutton"}
        type={props.type || "submit"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default AddCardButton;
