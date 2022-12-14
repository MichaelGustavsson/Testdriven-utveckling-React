const RegisterUser = () => {
  return (
    <div>
      <h1>Användar registrering</h1>
      <label htmlFor='username'>User Name</label>
      <input
        id='username'
        placeholder='username'
      />
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        placeholder='Email'
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        placeholder='Password'
        type='password'
      />
      <label htmlFor='confirmpassword'>Confirm Password</label>
      <input
        id='confirmpassword'
        placeholder='Confirm Password'
        type='password'
      />
      <button disabled>Register User</button>
    </div>
  );
};

export default RegisterUser;
