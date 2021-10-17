import React from "react";
import { addList, addCard } from "../reducer/action/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import AddCardButton from "./AddCardButton";
import "./AddCard.css";

const AddCard = ({ Listid }) => {
  const [openArea, setOpenArea] = useState(false);
  const [input, setInput] = useState("");
  const buttonText = Listid ? "Add a card" : "Add a list";
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("asd");s
    setInput("");
    setOpenArea(false);
  };
  const addListHandler = () => {
    dispatch(addList(input));
  };
  const addCardHandler = () => {
    dispatch(addCard(Listid, input));
  };
  return (
    <div>
      {openArea ? (
        <div className="bg">
          <form onSubmit={submitHandler}>
            <input
              className="textarea"
              placeholder="Enter the text for card"
              onChange={handleChange}
              value={input}
            />
            <div className="form">
              <AddCardButton onClick={Listid ? addCardHandler : addListHandler}>
                Add Card
              </AddCardButton>
              <div className="cross">
                <ImCross onClick={() => setOpenArea(false)} />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <AddCardButton className="btn" onClick={() => setOpenArea(true)}>
          <div className="icon">
            <AiOutlinePlus />
          </div>
          {console.log(Listid)}
          {buttonText}
        </AddCardButton>
      )}
    </div>
  );
};
export default AddCard;
