import React from "react";
import AddCard from "./AddCard";
import { useDispatch } from "react-redux";
import { editList, deleteList } from "../reducer/action/action";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Droppable } from "react-beautiful-dnd";
import TrelloCard from "./TrelloCard";

import "./TrelloList.css";

const TrelloList = ({ title, cards, Listid, listIndex }) => {
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
    <Droppable droppableId={String(Listid)}>
      {(provided) => (
        <div className="container">
          {openEdit ? (
            <form onSubmit={submitHandler} className="editform">
              <input
                value={input}
                className="editListForm"
                onChange={handleChange}
              />
              <div className="deleteicon">
                <MdDelete onClick={() => dispatch(deleteList(Listid))} />
              </div>
            </form>
          ) : (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h4 className="title" onClick={() => setOpenEdit(true)}>
                {title}
              </h4>
              <div>
                {cards.map((card, index) => (
                  <TrelloCard
                    listIndex={listIndex}
                    index={index}
                    text={card.text}
                    key={card.id}
                    id={card.id}
                  />
                ))}
              </div>
              <AddCard Listid={Listid} />
              {provided.placeholder}
            </div>
          )}
        </div>
      )}
    </Droppable>
  );
};
export default TrelloList;
