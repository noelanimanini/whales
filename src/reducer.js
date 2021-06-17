const initialState = {
  whales: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WHALES":
      return {
        ...state,
        whales: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
