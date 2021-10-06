import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./Title.css";
import AddCard from "./AddCard";

const Title = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <form className="form">
          <input className="input" value="Todo" />
          <div>
            <MdDeleteOutline className="icon" />
          </div>
        </form>
      ) : (
        <div>
          <Typography
            className="container"
            onClick={() => {
              setOpen(true);
            }}
          >
            First list
          </Typography>
          <AddCard />
        </div>
      )}
    </div>
  );
};

export default Title;
