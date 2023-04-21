import { useState } from 'react';
import { UserForm, UsersList } from './components';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container pt-5">
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UsersList users={users} />
    </div>
  );
}

export default App;
