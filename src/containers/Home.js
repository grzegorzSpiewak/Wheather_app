import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* Components */
import UserAdd from 'components/users/userAdd';
import UsersList from 'components/users/usersList';
import UserEdit from 'components/users/userEdit';

const mapStateToProps = ({ users }) => ({
  showEdit: users.showEdit
});

class Home extends Component {
  render() {
    const { showEdit } = this.props;
    return (
      <section id="home">
        <div className="users">
          {
            showEdit ? <UserEdit /> : <UsersList />
          }
        </div>
        {
          showEdit ? null : <UserAdd />
        }
      </section>
    );
  }
}

Home.propTypes = {
  showEdit: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Home);
