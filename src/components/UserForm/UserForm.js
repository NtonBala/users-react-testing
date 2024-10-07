import { useState } from 'react';

export const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onUserAdd({ name, email });

    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>

        <input id="inputName" className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>

        <input
          id="inputEmail"
          className="form-control"
          type="text"
          value={email}
          aria-describedby="emailHelp"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </div>
    </form>
  );
};
