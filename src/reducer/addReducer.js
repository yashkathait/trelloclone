import {
  ADD_LIST,
  ADD_CARD,
  EDIT_LIST,
  EDIT_CARD,
  DELETE_CARD,
  DRAG_HAPPEN,
  DELETE_LIST,
  GET_LIST,
} from "../components/Constant";
import LocalStorageManager from "../database/localstorage";

const initialData = {
  list: [
    {
      title: "To do",
      id: 1,
      cards: [],
    },
  ],
};
const addReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_LIST:
      const data = LocalStorageManager.getData();
      if (data != null) {
        return {
          ...state,
          list: data,
        };
      } else {
        return {
          ...state,
        };
      }

    case ADD_LIST: {
      const { title, id, cards } = action.payload;
      if (title === "" || title == null) {
        return {
          ...state,
        };
      }
      const list = [
        ...state.list,
        {
          title: title,
          id: id,
          cards: cards,
        },
      ];
      LocalStorageManager.addData(list);
      return {
        ...state,
        list,
      };
    }
    case ADD_CARD: {
      const newCard = {
        id: Math.random().toString(),
        text: action.payload.text,
      };

      if (action.payload.text === "" || action.payload.text == null) {
        return {
          ...state,
        };
      }

      const newState = state.list.map((list) => {
        if (list.id === action.payload.Listid) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      LocalStorageManager.addData(newState);

      return {
        ...state,
        list: newState,
      };
    }
    case EDIT_LIST: {
      const newList = state.list.map((list) => {
        if (list.id === action.payload.Listid) {
          list.title = action.payload.title;
          return {
            ...list,
          };
        } else {
          return list;
        }
      });
      LocalStorageManager.addData(newList);
      return {
        ...state,
        list: newList,
      };
    }
    case DELETE_LIST:
      const deletedList = state.list.filter(
        (list) => list.id !== action.payload.Listid
      );
      LocalStorageManager.addData(deletedList);
      return {
        ...state,
        list: deletedList,
      };

    case EDIT_CARD:
      const currentList = state.list;
      const listCardIndex = action.payload.listIndex;
      currentList[listCardIndex].cards.map((card) => {
        if (card.id === action.payload.id) {
          card.text = action.payload.text;
          return {
            ...card,
          };
        } else {
          return card;
        }
      });
      LocalStorageManager.addData(currentList);
      return {
        ...state.list,
        list: [...currentList],
      };

    case DELETE_CARD:
      const list = state.list;
      const listIndex = action.payload.listIndex;
      const deletedCard = state.list[listIndex].cards.filter(
        (card) => card.id !== action.payload.id
      );

      list[listIndex].cards = deletedCard;
      LocalStorageManager.addData(list);
      return {
        ...state,
        list: [...list],
      };
    case DRAG_HAPPEN: {
      const droppableIdSoucer = action.payload.droppableIdSoucer;
      const droppableIdDestination = action.payload.droppableIdDestination;
      const sourceIndex = action.payload.sourceIndex;
      const destinationIndex = action.payload.destinationIndex;
      const draggableId = action.payload.draggableId;
      const find = state.list.find(
        (list) => droppableIdSoucer === list.id.toString()
      );
      const put = state.list.find(
        (list) => droppableIdDestination === list.id.toString()
      );

      if (action.payload.type === "list") {
        var updatedList = state.list[sourceIndex];
        state.list.splice(sourceIndex, 1);
        state.list.splice(destinationIndex, 0, updatedList);
      } else if (droppableIdSoucer === droppableIdDestination) {
        var toMove = find.cards[sourceIndex];
        find.cards.splice(sourceIndex, 1);
        find.cards.splice(destinationIndex, 0, toMove);
      } else {
        var toShift = find.cards[sourceIndex];
        find.cards.splice(sourceIndex, 1);
        put.cards.splice(destinationIndex, 0, toShift);
      }

      LocalStorageManager.addData(state.list);

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default addReducer;
