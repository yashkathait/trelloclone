import React from "react";
import AddCard from "./AddCard";
import { useDispatch } from "react-redux";
import { editList } from "../reducer/action/action";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import TrelloCard from "./TrelloCard";
import "./TrelloList.css";

const TrelloList = ({ title, cards, Listid }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(title);
  const [openEdit, setOpenEdit] = useState(false);
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    dispatch(editList(Listid, input));
    event.preventDefault();

    setOpenEdit(false);
  };

  return (
    <div className="container">
      {openEdit ? (
        <form onSubmit={submitHandler} className="editform">
          <input
            value={input}
            className="editListForm"
            onChange={handleChange}
          />
          <div className="deleteicon">
            <MdDelete />
          </div>
        </form>
      ) : (
        <div>
          <h4 className="title" onClick={() => setOpenEdit(true)}>
            {title}
          </h4>
          <div>
            {cards.map((card) => (
              <TrelloCard text={card.text} key={card.id} />
            ))}
          </div>
          <AddCard Listid={Listid} />
        </div>
      )}
    </div>
  );
};
export default TrelloList;
