/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/* Actions */
import * as usersActions from 'modules/users/actions';

const mapDispatchToProps = (dispatch) => ({
  usersActions: bindActionCreators(usersActions, dispatch)
});

class UserCard extends Component {

  close() {
    const { closeEdit } = this.props.usersActions;
    closeEdit();
  }

  render() {
    const { name, surname, city, country } = this.props;

    return (
      <section className="user-card">
        <div className="user-card__picture" />
        <div className="user-card__details">
          <div className="user-card__details__user">
            <h1 className="user-card__details__user__name">{name}</h1>
            <h1 className="user-card__details__user__name">{surname}</h1>
          </div>
          <div className="user-card__details__user">
            <h1 className="user-card__details__user__location">{city}</h1>
            <h1 className="user-card__details__user__location">{country}</h1>
          </div>
        </div>
        <button
          className="user-card__btn"
          onClick={this.close.bind(this)}
          >
            Back
        </button>
      </section>
    );
  }
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default connect(null, mapDispatchToProps)(UserCard);
