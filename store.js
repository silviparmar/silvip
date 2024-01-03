// store.js
import { createStore } from 'redux';

const initialState = {
  value: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

const store = createstore(reducer);

export default store;
