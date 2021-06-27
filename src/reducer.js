export const initialState = {
  whales: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WHALES":
      console.log(action);
      return {
        ...state,

        whales: action.payload,
      };

    default:
      return state;
  }
};
