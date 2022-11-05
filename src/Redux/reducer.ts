import { SET_SEARCH_RESULTS } from './action';

const initialState = {
  searchResults: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
}

export default appReducer;
