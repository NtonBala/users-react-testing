import { render, screen, within } from '@testing-library/react';
import { UsersList } from './UsersList';

test('render one row per user', () => {
  // 1. Render the UsersList component
  const users = [
    { name: 'Jane', email: 'jane@jane.com' },
    { name: 'Sam', email: 'sam@sam.com' },
  ];

  render(<UsersList users={users} />);

  // 2. Find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // 3. Assert we have correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  // 1. Render the UsersList component
  // 2. Manipulate it to get the array of all the rows in the table
  // 3. Assert that users array mapped from rows corresponds users prop
});