import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'src/modules/index';

export const configure = (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
    )
  );
  return store;
};

export default configure;
