export const initialState = {
  locations: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WHALE_LOCATIONS":
      return {
        ...state,
        locations: action.locations,
      };
    default:
      return state;
  }
};
