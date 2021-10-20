import React from "react";
import { useState } from "react";
import EditCard from "./EditCard";
import { FiEdit2 } from "react-icons/fi";
import { Card, Typography } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import "./TrelloCard.css";

const TrelloCard = ({ text, id, index, listIndex }) => {
  const [openCard, setOpenCard] = useState(false);

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Card className="card">
            {openCard ? (
              <EditCard
                listIndex={listIndex}
                setOpenCard={setOpenCard}
                openCard={openCard}
                id={id}
                text={text}
              />
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
        </div>
      )}
    </Draggable>
  );
};
export default TrelloCard;
