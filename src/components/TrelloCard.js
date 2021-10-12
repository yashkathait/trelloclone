import React from "react";
import { Card, Typography } from "@material-ui/core";
import "./TrelloCard.css";

const TrelloCard = ({ title }) => {
  return (
    <Card className="card">
      <Typography>Word of Day</Typography>
    </Card>
  );
};
export default TrelloCard;
