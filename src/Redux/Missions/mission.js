import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'space-hub/missions/GET_MISSIONS';

const JOINED_MISSION = 'space-hub/missions/JOINED_MISSION';
const LEFT_MISSION = 'space-hub/missions/LEFT_MISSION';

const getMissions = createAsyncThunk(
  GET_MISSIONS,
  async (args, { dispatch }) => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const missions = await response.json();
    dispatch({
      type: GET_MISSIONS,
      payload: missions,
    });
  },
);

const joinMission = (mission) => ({
  type: JOINED_MISSION,
  payload: mission,
});

const leaveMission = (mission) => ({
  type: LEFT_MISSION,
  payload: mission,
});

export { getMissions, joinMission, leaveMission };
const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];
    case JOINED_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
    case LEFT_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return {
            ...mission,
            reserved: false,
          };
        }
        return mission;
      });

    default:
      return state;
  }
};

export default missionsReducer;
