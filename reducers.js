
// src/reducers.js
const initialState = {
    // Your initial state goes here
    value: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_VALUE':
        return {
          ...state,
          value: action.payload,
        };
      // Add more cases for other actions if needed
      default:
        return state;
    }
  };
  
  export default rootReducer;
  