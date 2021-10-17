export const addList = (title) => {
  return {
    type: "ADD_LIST",
    payload: {
      title: title,
      id: Math.random().toString(),
      cards: [],
    },
  };
};
export const addCard = (Listid, text) => {
  return {
    type: "ADD_CARD",
    payload: {
      text: text,
      Listid: Listid,
    },
  };
};
export const editList = (Listid, title) => {
  console.log(title);
  return {
    type: "EDIT_LIST",
    payload: {
      title: title,
      Listid: Listid,
    },
  };
};
