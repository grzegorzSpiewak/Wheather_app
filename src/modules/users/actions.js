export const LOAD_USERS = 'LOAD_USERS';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const EDIT_USER = 'EDIT_USER';
export const SAVE_USER = 'SAVE_USER';
export const CLOSE_EDIT = 'CLOSE_EDIT';

export function loadUsers(users) {
  return (dispatch) => {
    dispatch({
      type: LOAD_USERS,
      users
    });
  };
}

export function addUser(user) {
  return (dispatch) => {
    dispatch({
      type: ADD_USER,
      user
    });
  };
}

export function removeUser(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_USER,
      id
    });
  };
}

export function editUser(id) {
  return (dispatch) => {
    dispatch({
      type: EDIT_USER,
      id
    });
  };
}

export function saveUser(user) {
  return (dispatch) => {
    dispatch({
      type: SAVE_USER,
      user
    });
  };
}

export function closeEdit() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_EDIT
    });
  };
}
