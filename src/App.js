import { useState } from 'react';
import { UserForm, UsersList } from './components';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container pt-5">
      <div>
        <UserForm onUserAdd={onUserAdd} />
      </div>
      <hr />
      <div>
        <UsersList users={users} />
      </div>
    </div>
  );
}

export default App;
