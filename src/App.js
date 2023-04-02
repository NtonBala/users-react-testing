import { useState } from 'react';
import UserForm from './UserForm';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
    </div>
  );
}

export default App;
