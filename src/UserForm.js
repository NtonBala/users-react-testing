const UserForm = () => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
