/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
/* Components */
import UserTooltip from 'components/users/userTooltip';
/* Actions */
import * as usersActions from 'modules/users/actions';

const mapDispatchToProps = (dispatch) => ({
  usersActions: bindActionCreators(usersActions, dispatch)
});

class UserLabel extends Component {
  constructor() {
    super();
    this.state = {
      isHovering: false,
    };
  }

  onHover() {
    this.setState({
      isHovering: !this.state.isHovering
    });
  }

  render() {
    const { name, id } = this.props;
    const { removeUser, editUser } = this.props.usersActions;
    const { isHovering } = this.state;

    return (
      <li
        className="label"
      >
        <div className="label__logo" />
        <div className="label__details">
          <h1 className="label__details__user">{name}</h1>
        </div>
        <p
          className="label__info"
          onMouseEnter={this.onHover.bind(this)}
          onMouseLeave={this.onHover.bind(this)}
        >
          <i className="label__info__icon fa fa-search" aria-hidden="true" />
          More about
        </p>
        {
          isHovering ?
            <UserTooltip {...this.props} />
          :
            null
        }
        <div className="label__btns">
          <button className="label__btns__btn" onClick={removeUser.bind(this, id)}>Remove</button>
          <button className="label__btns__btn" onClick={editUser.bind(this, id)}>Edit</button>
        </div>
      </li>
    );
  }
}

export default connect(null, mapDispatchToProps)(UserLabel);
