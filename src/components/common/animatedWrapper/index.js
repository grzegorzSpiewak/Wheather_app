import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const AnimatedWrapper = (props) => {
  return (
    <CSSTransition
      timeout={700}
      in={props.in}
      classNames={props.animation}
      mountOnEnter
      unmountOnExit
    >
      {props.children}
    </CSSTransition>
  );
};

AnimatedWrapper.propTypes = {
  in: PropTypes.bool.isRequired,
  animation: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};


export default AnimatedWrapper;
