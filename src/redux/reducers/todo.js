import {
  REQUEST_TODO_LIST,
  RECEIVE_TODO_LIST,
  TODO_LIST_HELLO
} from "../actions/todo";

const defaultState = {
  requesting: false,
  data: [],
  error: false
};

export default function todo(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_TODO_LIST:
      return {
        ...state,
        requesting: true
      };
    case RECEIVE_TODO_LIST:
      return {
        requesting: false,
        ...action.payload
      };
    case TODO_LIST_HELLO:
      console.warn("Hello!!!");
      return state;
    default:
      return state;
  }
}
