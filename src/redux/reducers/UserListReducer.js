import { types } from "../types";

const initialState = {
  users: [],
};

export default function UserListReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_USER:
      return {...state, users: action.payload};
    default:
      return state;
  }
}
