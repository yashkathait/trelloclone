import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import { editCard, deleteCard } from "../reducer/action/action";
import { useDispatch } from "react-redux";
import "./EditCard.css";
import AddCardButton from "./AddCardButton";
const EditCard = ({ text, id, setOpenCard, openCard, listIndex }) => {
  const dispatach = useDispatch();
  const [editInput, setEditInput] = useState(text);
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const changeHandler = (event) => {
    setEditInput(event.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpenCard(!openCard);
          }}
        >
          <input
            value={editInput}
            onChange={changeHandler}
            className="editinput"
          />
          <AddCardButton
            onClick={() => {
              dispatach(editCard(id, editInput, listIndex));
              setOpenCard(!openCard);
            }}
            className="edit"
          >
            <b>Save</b>
          </AddCardButton>
          <AddCardButton
            onClick={() => {
              dispatach(deleteCard(id, listIndex));
              setOpenCard(!openCard);
            }}
            className="delete"
          >
            <b>Delete</b>
          </AddCardButton>
        </OutsideClickHandler>
      </form>
    </div>
  );
};

export default EditCard;
