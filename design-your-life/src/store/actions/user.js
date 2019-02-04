import axios from 'axios';

export const GET_USER = 'GET_USER';
export const GET_USER_COMPLETE = 'GET_USER_COMPLETE';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export const getUser = () => dispatch => {
  dispatch({
    type: GET_USER
  });
  axios
    .get('http://localhost:5000/api/user')
    .then(res =>
      dispatch({
        type: GET_USER_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_FAIL,
        error: err
      })
    );
};
