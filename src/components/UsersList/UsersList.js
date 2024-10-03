import React from 'react';

export const UsersList = ({ users }) => {
  const renderedUsers = users.map((user, i) => (
    <tr key={i}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <div className="table-responsive">
      <table className="table table-light table-striped">
        <caption>List of Users</caption>

        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody data-testid="users">{renderedUsers}</tbody>
      </table>
    </div>
  );
};
