import * as types from '../constants/actionTypes';

export const loadApps = () => (dispatch) => {
  fetch('/api')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: types.LOAD_JOB_APPS,
        // payload will consist of an array of jobItems
        payload: data,
      });
    })
    .catch(console.error);
};

export const addJob = () => (dispatch) => {
  dispatch({
    type: types.ADD_JOB_APP,
  });
};

export const updateNewCompany = (data) => (dispatch) => {
  dispatch({
    type: types.UPDATE_NEW_COMPANY,
    payload: data,
  });
};

export const updateNewPosition = (data) => (dispatch) => {
  dispatch({
    type: types.UPDATE_NEW_POSITION,
    payload: data,
  });
};

export const updateNewDate = (data) => (dispatch) => {
  dispatch({
    type: types.UPDATE_NEW_DATE,
    payload: data,
  });
};

export const updateNewStatus = (data) => (dispatch) => {
  dispatch({
    type: types.UPDATE_NEW_STATUS,
    payload: data,
  });
};

export const updateApps = () => {
  // Does nothing so far
};
