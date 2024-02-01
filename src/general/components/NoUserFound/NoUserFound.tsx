import React from 'react';
import './NoUserFound.scss';
import NoUsers from '../../assets/NoUsers.png';
import withHelloMessage from '../../../hoc/withHelloMessage';

const NoUserFound = () => {
  return (
    <div className="no-users-container">
      <img src={NoUsers} alt="No Users Found" className="no-users-image" />
      <p className="no-users-text">No users found</p>
    </div>
  );
};

export default withHelloMessage(NoUserFound);
