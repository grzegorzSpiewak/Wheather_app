import React from 'react';
import PropTypes from 'prop-types';

const Fieldset = (props) => {
  return (
    <fieldset className={`${props.classNames}__fieldset`}>
      <label
        className={`${props.classNames}__fieldset__label`}
        htmlFor={`user ${props.details}`}
      >
        {props.details}:
      </label>
      <input
        className={`${props.classNames}__fieldset__input`}
        type="text"
        name={props.name}
        onChange={props.onChange}
        placeholder={props.name}
        required
      />
    </fieldset>
  );
};

Fieldset.propTypes = {
  classNames: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Fieldset;
