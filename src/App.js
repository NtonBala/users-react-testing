import { useState } from 'react';
import { UserForm, UsersList } from './components';

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand h1 mb-0">Users</span>
        </div>
      </nav>

      <div className="container pt-5">
        <div>
          <UserForm onUserAdd={onUserAdd} />
        </div>

        <div className="pt-5">
          <UsersList users={users} />
        </div>
      </div>
    </>
  );
}

export default App;
