import React from "react";
import TrelloCard from "./TrelloCard";
import "./TrelloList.css";

const TrelloList = ({ title }) => {
  return (
    <div className="container">
      <h4 className="title">title</h4>
      <div>
        <TrelloCard />
      </div>
    </div>
  );
};
export default TrelloList;
