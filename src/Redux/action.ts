import { Dispatch } from 'redux';

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const setSearchResults =
  (results: Array<object>) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_SEARCH_RESULTS, //action type
      payload: results, //action value
    });
  };
