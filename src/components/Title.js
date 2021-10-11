import React from "react";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./Title.css";
import AddCard from "./AddCard";

const Title = () => {
  const [title, setTitle] = useState("First List");
  const [open, setOpen] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    setOpen(false);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      {open ? (
        <form className="form" onSubmit={submitHandler}>
          <input className="input" onChange={handleChange} value={title} />
          <div>
            <MdDeleteOutline className="icon" />
          </div>
        </form>
      ) : (
        <div>
          <div
            value={title}
            className="container"
            onClick={() => {
              setOpen(true);
            }}
          >
            {title}
          </div>
        </div>
      )}
      <AddCard />
    </div>
  );
};

export default Title;
