export const addCard = (data) => {
  return {
    type: "ADD_CARD",
    payload: {
      id: Math.random().toString(),
      data: data,
    },
  };
};
