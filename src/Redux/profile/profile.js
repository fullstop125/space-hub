const RESERVED = 'space-hub/profile/RESERVED';
const JOINED = 'space-hub/profile/JOINED';

export const reserved = (payload) => ({
  type: RESERVED,
  payload,
});

export const joined = (payload) => ({
  type: JOINED,
  payload,
});

const initialState = {
  reserved: [],
  joined: [],
};

export default function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESERVED:
      return {
        ...state,
        reserved: action.payload,
      };
    case JOINED:
      return {
        ...state,
        joined: action.payload,
      };
    default:
      return state;
  }
}
