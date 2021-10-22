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
  return {
    type: "EDIT_LIST",
    payload: {
      title: title,
      Listid: Listid,
    },
  };
};
export const editCard = (id, text, listIndex) => {
  return {
    type: "EDIT_CARD",
    payload: {
      id: id,
      text: text,
      listIndex: listIndex,
    },
  };
};
export const deleteCard = (id, listIndex) => {
  return {
    type: "DELETE_CARD",
    payload: {
      listIndex: listIndex,
      id: id,
    },
  };
};
export const deleteList = (Listid) => {
  return {
    type: "DELETE_LIST",
    payload: {
      Listid: Listid,
    },
  };
};
export const sort = (
  sourceIndex,
  destinationIndex,
  droppableIdSoucer,
  droppableIdDestination
) => {
  return {
    type: "DRAG_HAPPEN",
    payload: {
      sourceIndex: sourceIndex,
      destinationIndex: destinationIndex,
      droppableIdSoucer: droppableIdSoucer,
      droppableIdDestination: droppableIdDestination,
    },
  };
};
