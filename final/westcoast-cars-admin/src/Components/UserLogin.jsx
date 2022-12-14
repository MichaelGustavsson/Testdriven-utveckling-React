const UserLogin = () => {
  return (
    <div>
      <label htmlFor='username'>Username/Email</label>
      <input
        id='username'
        placeholder='username'
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        placeholder='password'
      />
      <input
        type='button'
        value='Login'
        disabled
      />
    </div>
  );
};

export default UserLogin;
