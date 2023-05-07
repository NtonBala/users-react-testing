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
  // * NOT THE BEST IMPLEMENTATION
  // * Pseudo code:
  // 1. Try to render form component
  // 2. Find elements and manipulate them:
  //    a. Find 2 inputs and simulate typing in a name and an email
  //    b. Find a button and simulate submitting a form
  // 3. Make sure onUserAdd is called with name and email

  const argsList = [];
  const cb = (...args) => {
    argsList.push(args);
  };

  render(<UserForm onUserAdd={cb} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  await user.click(nameInput);
  await user.keyboard('Jane');

  await user.click(emailInput);
  await user.keyboard('jane@jane.com');

  const button = screen.getByRole('button');

  await user.click(button);

  // Make sure cb is called at least one time and verify its argument
  expect(argsList).toHaveLength(1);
  expect(argsList[0][0]).toEqual({ name: 'Jane', email: 'jane@jane.com' });
});
