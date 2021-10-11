const initialData = {
  list: [],
};
const addReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_CARD":
      const { id, data } = action.payload;
      if (data === "") {
        return {
          ...state,
        };
      }
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    default:
      return state;
  }
};

export default addReducer;
