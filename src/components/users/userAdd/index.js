/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
/* Actions */
import * as usersActions from 'modules/users/actions';
/* Components */
import Fieldset from 'components/common/fieldset';

const formInputsData = [
  { type: 'text', name: 'name', placeholder: 'type in' },
  { type: 'text', name: 'surname', placeholder: 'type in' },
  { type: 'text', name: 'city', placeholder: 'type in' },
  { type: 'text', name: 'country', placeholder: 'type in' }
];

const mapStateToProps = ({ users }) => ({
  usersState: users
});

const mapDispatchToProps = (dispatch) => ({
  usersActions: bindActionCreators(usersActions, dispatch)
});

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      surname: '',
      city: '',
      country: ''
    };
    this.handleInputs = this.handleInputs.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { addUser } = this.props.usersActions;
    const newUser = this.newUser();
    e.preventDefault();
    addUser(newUser);
  }

  handleInputs(e) {
    e.preventDefault();
    const newState = {};
    newState[ e.target.name ] = e.target.value;
    this.setState(newState);
  }

  newUser() {
    const { name, surname, city, country } = this.state;
    const newId = this.newId();
    const newUser = {
      name,
      surname,
      city,
      country,
      id: newId
    };
    return newUser;
  }

  newId() {
    const { users } = this.props.usersState;
    const newId = users.length === 0 ? 1 : users[ users.length - 1 ].id + 1;
    return newId;
  }

  render() {
    return (
      <form className="new-user" onSubmit={this.onSubmit}>
        <legend className="new-user__legend">
          Add new user:
        </legend>
        {
          formInputsData.map(data =>
            (
              <Fieldset
                key={data.name}
                details={data.name}
                classNames="new-user"
                onChange={this.handleInputs}
                name={data.name}
              />
            )
          )
        }
        <button type="submit">Add new user</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
