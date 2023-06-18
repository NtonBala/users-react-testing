import { render, screen } from '@testing-library/react';
import { UserList } from './UsersList';

test('render one row per user', () => {
  // TODO:
  // 1. Render the UserList component
  const users = [
    { name: 'Jane', email: 'jane@jane.com' },
    { name: 'Sam', email: 'sam@sam.com' },
  ];

  render(<UserList users={users} />);

  // 2. Find all the rows in the table
  // 3. Assert we have correct number of rows in the table
});

test('render the email and name of each user', () => {
  // TODO:
  // 1. Render the UserList component
  // 2. Manipulate it to get the array of all the rows in the table
  // 3. Assert that users array mapped from rows corresponds users prop
});
