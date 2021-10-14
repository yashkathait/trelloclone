import "./App.css";
import TrelloList from "./components/TrelloList";
import AddCard from "./components/AddCard";
import { useSelector } from "react-redux";

function App() {
  const list = useSelector((state) => state.addReducer.list);
  return (
    <div className="app">
      <h2>Trello</h2>
      <div className="list">
        {list.map((list) => (
          <TrelloList key={list.id} title={list.title} cards={list.cards} />
        ))}
        <AddCard list />
      </div>
    </div>
  );
}

export default App;
