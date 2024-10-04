import { render, screen, within } from '@testing-library/react';
import { UsersList } from './UsersList';

function renderComponent() {
  const users = [
    { name: 'Jane', email: 'jane@jane.com' },
    { name: 'Sam', email: 'sam@sam.com' },
  ];

  render(<UsersList users={users} />);

  return { users };
}

test('render one row per user', () => {
  renderComponent();

  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const { users } = renderComponent();

  for (const user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
