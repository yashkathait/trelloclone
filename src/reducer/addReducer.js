const initialData = [
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
];
const addReducer = (state = initialData, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default addReducer;
