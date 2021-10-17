import React from "react";
import { useState } from "react";
import EditCard from "./EditCard";
import { FiEdit2 } from "react-icons/fi";
import { Card, Typography } from "@material-ui/core";
import "./TrelloCard.css";

const TrelloCard = ({ text, id }) => {
  const [openCard, setOpenCard] = useState(false);
  return (
    <Card className="card">
      {openCard ? (
        <EditCard text={text} />
      ) : (
        <div className="ca">
          <div>
            <Typography>{text}</Typography>
          </div>

          <div className="editicon">
            <FiEdit2
              onClick={() => {
                setOpenCard(true);
              }}
            />
          </div>
        </div>
      )}
    </Card>
  );
};
export default TrelloCard;
