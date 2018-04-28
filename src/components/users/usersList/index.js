/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
/* Components */
import UserLabel from 'components/users/userLabel';
/* Actions */
import * as usersActions from 'modules/users/actions';
/* this is placeholder */
import UsersJSON from 'data/users';

const mapStateToProps = ({ users }) => ({
  usersState: users
});

const mapDispatchToProps = (dispatch) => ({
  usersActions: bindActionCreators(usersActions, dispatch)
});

class UsersList extends Component {
  componentWillMount() {
    const { loadUsers } = this.props.usersActions;
    const { users } = this.props.usersState;
    const usersToLoad = users.length > 0 ? users : UsersJSON;
    /* Load users from JSON */
    loadUsers(usersToLoad);
  }

  render() {
    const { users } = this.props.usersState;
    return (
      <TransitionGroup
        component="ul"
        className="users__list"
      >
        {
          users.map(user =>
            (
              <CSSTransition
                key={user.id}
                classNames="list"
                timeout={600}
                appear
              >
                <UserLabel
                  {...user}
                />
              </CSSTransition>
            )
          )
        }
      </TransitionGroup>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
