import { Dispatch } from 'redux';

export const SET_SCREEN_DIMENSIONS = 'SET_SCREEN_DIMENSIONS';

export const setScreenDimensions =
  (dimensions: object) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_SCREEN_DIMENSIONS, //action type
      payload: dimensions, //action value
    });
  };
