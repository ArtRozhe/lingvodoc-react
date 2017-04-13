import { combineReducers } from 'redux';
// Actions
const REQUEST = '@lang/REQUEST';
const SELECT = '@lang/SELECT';
const SET = '@lang/SET';

// Reducers
function langs(state = [], action = {}) {
  switch (action.type) {
    case SET:
      return action.payload;
    default:
      return state;
  }
}

function selected(state = {}, action = {}) {
  switch (action.type) {
    case SELECT:
      return action.payload;
    default:
      return state;
  }
}

function loading(state = false, action = {}) {
  switch (action.type) {
    case REQUEST:
      return true;
    case SET:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  langs,
  selected,
  loading,
});

// Action Creators
export function requestLangs() {
  return { type: REQUEST };
}

export function selectLang(payload) {
  return { type: SELECT, payload };
}

export function setLangs(payload) {
  return { type: SET, payload };
}