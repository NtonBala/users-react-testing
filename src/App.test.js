import { render } from '@testing-library/react';
import App from './App';

test('can receive a new user and show it on a list', () => {
  // 1. Render app component.
  render(<App />);

  // 2. Find name & email inputs, click on them, type in them, click the button to submit the form.
  // 3. Make sure we can find the new name & email in the table.
});
