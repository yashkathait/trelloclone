import React from "react";
import { useState } from "react";
import "./EditCard.css";
import AddCardButton from "./AddCardButton";
const EditCard = ({ text }) => {
  const [editInput, setEditInput] = useState(text);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(editInput);
  };
  const changeHandler = (event) => {
    setEditInput(event.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={editInput} onChange={changeHandler} />
        <AddCardButton className="edit">Save</AddCardButton>
        <AddCardButton className="delete">Delete</AddCardButton>
      </form>
    </div>
  );
};

export default EditCard;
