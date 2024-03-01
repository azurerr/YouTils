const initialState = {
    user: {
        displayName: null,
        email: null,
        photoUrl: null,
      },
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;