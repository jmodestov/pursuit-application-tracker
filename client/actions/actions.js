import * as types from '../constants/actionTypes';
import jobAppsReducer from '../reducers/jobAppsReducer';

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

export const addJob = () => ({
  type: types.ADD_JOB_APP,
});

export const updateNewCompany = (data) => ({
  type: types.UPDATE_NEW_COMPANY,
  payload: data,
});

export const updateNewPosition = (data) => ({
  type: types.UPDATE_NEW_POSITION,
  payload: data,
});

export const updateNewDate = (data) => ({
  type: types.UPDATE_NEW_DATE,
  payload: data,
});

export const updateNewStatus = (data) => ({
  type: types.UPDATE_NEW_STATUS,
  payload: data,
});

// Do fetch request here?
export const saveNewJob = (company, position, date, status) => (dispatch) => {
  const newJobObj = {
    company,
    position,
    date,
    status,
  };
  fetch('/api/addJobRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJobObj),
  })
    .then(() => {
      dispatch({
        type: types.SAVE_NEW_JOB,
      });
    })
    .then(loadApps());
};

export const deleteJob = (jobId) => (dispatch) => {
  const deleteObj = {
    jobId,
  };

  fetch('/api/deleteRecord', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(deleteObj),
  })
    .then(
      dispatch({
        type: types.DELETE_JOB,
      })
    )
    .then(loadApps());
};
