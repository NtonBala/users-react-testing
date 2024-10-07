import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { UserForm } from './UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
  const mock = jest.fn();

  // * Pseudo Code
  // * 1. Try to render form component
  render(<UserForm onUserAdd={mock} />);

  // * 2. Find elements and manipulate them
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  await user.click(nameInput);
  await user.keyboard('Jane');

  await user.click(emailInput);
  await user.keyboard('jane@jane.com');

  const button = screen.getByRole('button');

  await user.click(button);

  // * 3. Make sure onUserAdd is called with name and email
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'Jane', email: 'jane@jane.com' });
});

test('it empties the two inputs when the form is submitted', async () => {
  // 1. Render UserForm component.
  render(<UserForm onUserAdd={() => {}} />);

  // 2. Find name & email, click on them and type in them. Click on the button.
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard('Jane');
  await user.click(emailInput);
  await user.keyboard('jane@jane.com');

  await user.click(button);

  // 3. Make sure name & email inputs has no value.
  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
