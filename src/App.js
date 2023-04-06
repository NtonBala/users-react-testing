import { useState } from 'react';
import { UserForm, UsersList } from './components';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UsersList users={users} />
    </div>
  );
}

export default App;
