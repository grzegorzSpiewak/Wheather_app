import {
  LOAD_USERS,
  ADD_USER,
  REMOVE_USER,
  EDIT_USER,
  SAVE_USER,
  CLOSE_EDIT
} from './actions';

const INITIAL_STATE = {
  users: [],
  userToEdit: [],
  showEdit: false
};

function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_USERS:
    return {
      ...state,
      users: action.users
    };
  case ADD_USER:
    return {
      ...state,
      users: [...state.users, action.user]
    };
  case REMOVE_USER:
    return {
      ...state,
      users: state.users.filter(user => action.id !== user.id)
    };
  case EDIT_USER:
    return {
      ...state,
      userToEdit: state.users.filter(user => action.id === user.id),
      showEdit: true
    };
  case CLOSE_EDIT:
    return {
      ...state,
      userToEdit: [],
      showEdit: false
    };
  case SAVE_USER:
    return {
      ...state,
      users: [...state.users, action.user],
      showEdit: false
    };
  default:
    return state;
  }
}

export default usersReducer;
