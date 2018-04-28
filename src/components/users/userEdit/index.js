/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
/* Actions */
import * as usersActions from 'modules/users/actions';
/* Components */
import UserCard from 'components/users/userCard';
import Fieldset from 'components/common/fieldset';
import AnimatedWrapper from 'components/common/animatedWrapper';

const mapStateToProps = ({ users }) => ({
  user: users.userToEdit[ 0 ]
});

const mapDispatchToProps = (dispatch) => ({
  usersActions: bindActionCreators(usersActions, dispatch),
});

class UserEdit extends Component {
  constructor(props) {
    super(props),
    this.state = {
      name: this.props.user.name,
      surname: this.props.user.surname,
      city: this.props.user.city,
      country: this.props.user.country,
      id: this.props.user.id,
      show: false,
    }
  }

  componentDidMount() {
    this.toggleShow();
  }

  componentWillUnmount() {
    this.toggleShow();
  }

  onSubmit(e) {
    const { removeUser, saveUser } = this.props.usersActions;
    const { id } = this.state;
    const editedUser = this.editedUser();

    e.preventDefault();
    removeUser(id);
    saveUser(editedUser);
  }

  handleInputs(e) {
    e.preventDefault();
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  editedUser() {
    const { name, surname, city, country, id } = this.state;
    let newUser = {
      name: name,
      surname: surname,
      city: city,
      country: country,
      id: id
    };
    return newUser;
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const { name, surname, city, country } = this.props.user;
    let { show } = this.state;

    return (
      <AnimatedWrapper
        in={show}
        animation="fade"
      >
        <div className="user-edit">
          <UserCard  {...this.props.user} />
          <form className="form-edit" onSubmit={this.onSubmit.bind(this)}>
            <legend className="form-edit__legend">
              Edit user data:
            </legend>
            <Fieldset
              details={name}
              classNames="form-edit"
              onChange={this.handleInputs.bind(this)}
              name="name"
              value={name}
            />
            <Fieldset
              details={surname}
              classNames="form-edit"
              onChange={this.handleInputs.bind(this)}
              name="surname"
              value={name}
            />
            <Fieldset
              details={city}
              classNames="form-edit"
              onChange={this.handleInputs.bind(this)}
              name="city"
              value={name}
            />
            <Fieldset
              details={country}
              classNames="form-edit"
              onChange={this.handleInputs.bind(this)}
              name="country"
              value={name}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </AnimatedWrapper>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
