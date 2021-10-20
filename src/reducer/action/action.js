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
  console.log(listIndex);
  return {
    type: "EDIT_CARD",
    payload: {
      id: id,
      text: text,
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
