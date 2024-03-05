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
      console.log('Reducer LogIn!');
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_USER':
      console.log('Reducer LogOut!');
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default rootReducer;