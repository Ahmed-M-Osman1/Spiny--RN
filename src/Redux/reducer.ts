import { SET_SCREEN_DIMENSIONS } from './action';

const initialState = {
  appDimensions: {},
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCREEN_DIMENSIONS:
      return { ...state, appDimensions: action.payload };
    default:
      return state;
  }
}

export default appReducer;
