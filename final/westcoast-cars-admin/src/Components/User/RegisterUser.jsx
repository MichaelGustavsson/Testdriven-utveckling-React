import { useState } from 'react';

const RegisterUser = () => {
  const [buttonDisable, setButtonDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onChangePasswordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);
    setButtonDisabled(value !== confirmPassword);
  };

  const onChangeConfirmPasswordHandler = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setButtonDisabled(value !== password);
  };

  return (
    <section className='container'>
      <h1 className='page-title'>Användar registrering</h1>
      <form>
        <div className='form-control'>
          <label htmlFor='username'>User Name</label>
          <input
            id='username'
            placeholder='username'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            placeholder='Email'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            placeholder='Password'
            type='password'
            value={password}
            onChange={onChangePasswordHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='confirmpassword'>Confirm Password</label>
          <input
            id='confirmpassword'
            placeholder='Confirm Password'
            type='password'
            value={confirmPassword}
            onChange={onChangeConfirmPasswordHandler}
          />
        </div>
        <div className='form-control'>
          <button
            className='btn btn-primary'
            disabled={buttonDisable}
          >
            Register User
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterUser;
