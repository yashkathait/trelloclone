import React from "react";
import "./List.css";
import { Paper } from "@material-ui/core";
import Title from "./Title";
const List = () => {
  return (
    <div className="list">
      <Paper>
        <Title />
      </Paper>
    </div>
  );
};

export default List;
