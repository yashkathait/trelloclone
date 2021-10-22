import "./App.css";

import TrelloList from "./components/TrelloList";
import AddCard from "./components/AddCard";
import { useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { sort } from "./reducer/action/action";

function App() {
  const list = useSelector((state) => state.addReducer.list);
  const dispatch = useDispatch();
  console.log(list);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.index,
        destination.index,
        source.droppableId,
        destination.droppableId
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <h2>Trello</h2>
        <div className="list">
          {list.map((list, index) => (
            <TrelloList
              listIndex={index}
              Listid={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <AddCard list />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
