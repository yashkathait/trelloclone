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
    default:
      return state;
  }
};

export default addReducer;
