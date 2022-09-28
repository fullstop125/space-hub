const RESERVED = 'space-hub/profile/RESERVED';
const JOINED = 'space-hub/profile/JOINED';
const CANCEL_RESERVATION = 'space-hub/profile/CANCEL_RESERVATION';

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

export const cancelReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  payload,
});

export default function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESERVED:
      return {
        ...state,
        reserved: [...state.reserved, action.payload],
      };
    case JOINED:
      return {
        ...state,
        joined: [...state.joined, action.payload],
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        reserved: state.reserved.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
}
