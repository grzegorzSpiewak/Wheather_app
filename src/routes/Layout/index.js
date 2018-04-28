import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
/* Pages */
import Home from 'containers/Home';
import ErrorPage from 'containers/ErrorPage';
/* Layout */
import HeadElement from 'components/layout/headElement';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';

const Layout = ({ location }) => {
  const currentKey = location.pathname.split('/')[ 1 ] || '/';
  const timeout = { enter: 700, exit: 700 };

  return (
    <div className="page">
      <HeadElement />
      <Header />
      <TransitionGroup component="main" id="page-wrap">
        <CSSTransition key={currentKey} timeout={timeout} classNames="slide" appear>
          <Switch key={currentKey} location={location}>
            <Route path="/" component={Home} exact />
            <Route component={ErrorPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Layout);
