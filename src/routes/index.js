import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Layout from './Layout';

const App = props => (
  <Provider store={props.store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
