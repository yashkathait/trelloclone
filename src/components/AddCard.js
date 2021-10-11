import React from "react";
import { useState } from "react";
import { addCard } from "../reducer/action/action";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import "./AddCard.css";
import AddCardButton from "./AddCardButton";

const AddCard = () => {
  const [openInput, setopenInput] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();

    setInput("");
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="outercard">
      {openInput ? (
        <form onSubmit={submitHandler}>
          <input
            onChange={handleChange}
            placeholder={"Enter the text for this card"}
            className="textarea"
            value={input}
          />
          <AddCardButton onClick={() => dispatch(addCard(input))}>
            Add card
          </AddCardButton>
        </form>
      ) : (
        <div className="card">
          <AiOutlinePlus className="plus_icon" />
          <div className="text" onClick={() => setopenInput(true)}>
            Add a card
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
