import { ADD_LIST, ADD_CARD, EDIT_LIST } from "../components/Constant";

const initialData = {
  list: [
    {
      title: "Last Episode",
      id: 0,
      cards: [
        {
          id: 0,
          text: "Static List",
        },
        {
          id: 1,
          text: "Static List",
        },
      ],
    },
    {
      title: "This Episode",
      id: 1,
      cards: [
        {
          id: 0,
          text: "Static List 2",
        },
        {
          id: 1,
          text: "Static List 2",
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
      console.log(newList);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};

export default addReducer;
