// const initialState = {};

const showMobileReducer = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_MOBILE":
      return action.payload;
    default:
      return state;
  }
};

export default showMobileReducer;
