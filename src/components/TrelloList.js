import React from "react";
import AddCard from "./AddCard";

import TrelloCard from "./TrelloCard";
import "./TrelloList.css";

const TrelloList = ({ title, cards }) => {
  return (
    <div className="container">
      <h4 className="title">{title}</h4>
      <div>
        {cards.map((card) => (
          <TrelloCard text={card.text} key={card.id} />
        ))}
      </div>
      <AddCard />
    </div>
  );
};
export default TrelloList;
