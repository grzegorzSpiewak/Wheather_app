import axios from 'axios';
import { API_BASE_URL, API_CLIENT_ID, API_CONTENT_TYPE } from 'config/client';

export const FETCHING_WHEATHER_SUCCEED = 'FETCHING_WHEATHER_SUCCEED';
export const FETCHING_WHEATHER_FAILED = 'FETCHING_WHEATHER_FAILED';
export const CLEANING_TOOLPIP = 'CLEANING_TOOLPIP';

export function fetchWheather(city) {
  return (dispatch) => {
    return axios.get(`${API_BASE_URL}${API_CONTENT_TYPE}${city}&APPID=${API_CLIENT_ID}`).then((data) => {
      dispatch({
        type: FETCHING_WHEATHER_SUCCEED,
        data
      });
    }).catch((error) => {
      dispatch({
        type: FETCHING_WHEATHER_FAILED,
        error
      });
    });
  };
}

export function cleanTollpip() {
  return (dispatch) => {
    dispatch({
      type: CLEANING_TOOLPIP
    });
  };
}
