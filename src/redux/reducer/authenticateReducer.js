const initialValue = {
  isAuthenticated: false,
};

const authenticateReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "AUTHENTICATION":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default authenticateReducer;
