import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import AddCardButton from "./AddCardButton";
import "./AddCard.css";

const AddCard = ({ list }) => {
  const [openArea, setOpenArea] = useState(false);
  const buttonText = list ? "Add Another list" : "Add a card";
  return (
    <div>
      {openArea ? (
        <div className="bg">
          <TextareaAutosize
            className="textarea"
            placeholder="Enter the text for card"
            autoFocus
          />
          <div className="form">
            <AddCardButton>Add Card</AddCardButton>
            <div className="cross">
              <ImCross onClick={() => setOpenArea(false)} />
            </div>
          </div>
        </div>
      ) : (
        <AddCardButton className="btn" onClick={() => setOpenArea(true)}>
          <div className="icon">
            <AiOutlinePlus />
          </div>
          {buttonText}
        </AddCardButton>
      )}
    </div>
  );
};
export default AddCard;
