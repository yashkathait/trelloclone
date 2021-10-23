import { useEffect } from "react";
import "./App.css";
import { Droppable } from "react-beautiful-dnd";
import TrelloList from "./components/TrelloList";
import AddCard from "./components/AddCard";
import { useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { sort, getList } from "./reducer/action/action";
import { Typography } from "@material-ui/core";

function App() {
  const list = useSelector((state) => state.addReducer.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, type, draggableId } = result;

    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.index,
        destination.index,
        source.droppableId,
        destination.droppableId,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <div className="trello-headline">
          <Typography
            color="#ffffff"
            variant="h3"
            className="trello-headline-text"
          >
            Trello
          </Typography>
        </div>
        <div className="trello-list-container">
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <div
                className="list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {list.map((list, index) => (
                  <TrelloList
                    listIndex={index}
                    Listid={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <AddCard list />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
