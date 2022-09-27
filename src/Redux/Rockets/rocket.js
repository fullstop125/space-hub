import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'space-hub/rockets/GET_ROCKETS';

const getRockets = createAsyncThunk(GET_ROCKETS, async (args, { dispatch }) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
});

export { getRockets };
const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default rocketReducer;
