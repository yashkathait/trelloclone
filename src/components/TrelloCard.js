import React from "react";
import { Card, Typography } from "@material-ui/core";
import "./TrelloCard.css";

const TrelloCard = ({ text, id }) => {
  return (
    <Card className="card">
      <Typography>{text}</Typography>
    </Card>
  );
};
export default TrelloCard;
