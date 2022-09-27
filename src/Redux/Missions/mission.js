import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'space-hub/missions/GET_MISSIONS';

const getMissions = createAsyncThunk(GET_MISSIONS, async (args, { dispatch }) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await response.json();
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
});

export { getMissions };
const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
