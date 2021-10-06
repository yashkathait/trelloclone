import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./AddCard.css";

const AddCard = () => {
  return (
    <div className="outercard">
      <div className="card">
        <AiOutlinePlus className="plus_icon" />
        <div className="text">Add a card</div>
      </div>
    </div>
  );
};

export default AddCard;
