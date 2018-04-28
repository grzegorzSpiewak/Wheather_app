import {
  FETCHING_WHEATHER_SUCCEED,
  FETCHING_WHEATHER_FAILED,
  CLEANING_TOOLPIP } from './actions';

const INITIAL_STATE = {
  wheather: [],
  isFetching: true
};

function getWheatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_WHEATHER_SUCCEED:
    return {
      ...state,
      wheather: action.data.data.weather[ 0 ],
      isFetching: false
    };
  case FETCHING_WHEATHER_FAILED:
    return {
      ...state,
      wheather: 'Can&apost load data, try later',
      isFetching: false
    };
  case CLEANING_TOOLPIP:
    return {
      ...state,
      wheather: [],
      isFetching: true
    };
  default:
    return state;
  }
}

export default getWheatherReducer;
