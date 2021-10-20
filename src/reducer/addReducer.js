import {
  ADD_LIST,
  ADD_CARD,
  EDIT_LIST,
  EDIT_CARD,
  DELETE_CARD,
  DRAG_HAPPEN,
} from "../components/Constant";

const initialData = {
  list: [
    {
      title: "Last Episode",
      id: 1,
      cards: [
        {
          id: 2,
          text: "Static List1",
        },
        {
          id: 3,
          text: "Static List2",
        },
      ],
    },
    {
      title: "This Episode",
      id: 4,
      cards: [
        {
          id: 5,
          text: "Static List 3",
        },
        {
          id: 6,
          text: "Static List 4",
        },
        {
          id: 7,
          text: "Static List 5",
        },
        {
          id: 8,
          text: "Static List 6",
        },
        {
          id: 9,
          text: "Static List 7",
        },
      ],
    },
  ],
};
const addReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_LIST:
      const { title, id, cards } = action.payload;
      if (title === "") {
        return {
          ...state,
        };
      }
      return {
        ...state,
        list: [
          ...state.list,
          {
            title: title,
            id: id,
            cards: cards,
          },
        ],
      };
    case ADD_CARD:
      const newCard = {
        id: Math.random().toString(),
        text: action.payload.text,
      };

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
      if (action.payload.text === "") {
        return {
          ...state,
        };
      }
      return {
        ...state,
        list: newState,
      };
    case EDIT_LIST:
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
      return {
        ...state,
        list: newList,
      };
    case EDIT_CARD:
      const currentList = state.list;
      const listCardIndex = action.payload.listIndex;
      const editCard = state.list[listCardIndex].cards.map((card) => {
        if (card.id === action.payload.id) {
          card.text = action.payload.text;
        }
      });
      currentList[listCardIndex].cards = editCard;
      return {
        ...state,
        currentList: [...currentList],
      };

    case DELETE_CARD:
      const list = state.list;
      const listIndex = action.payload.listIndex;
      const deletedCard = state.list[listIndex].cards.filter(
        (card) => card.id !== action.payload.id
      );

      list[listIndex].cards = deletedCard;

      return {
        ...state,
        list: [...list],
      };
    case DRAG_HAPPEN:
      const droppableIdSoucer = action.payload.droppableIdSoucer;
      const droppableIdDestination = action.payload.droppableIdDestination;
      const sourceIndex = action.payload.sourceIndex;
      const destinationIndex = action.payload.destinationIndex;
      if (droppableIdSoucer === droppableIdDestination) {
        const find = state.list.find(
          (list) => droppableIdSoucer === list.id.toString()
        );

        var toMove = find.cards[sourceIndex];
        find.cards.splice(sourceIndex, 1);
        find.cards.splice(destinationIndex, 0, toMove);
      }

    default:
      return state;
  }
};

export default addReducer;
