import { render, screen } from '@testing-library/react';

import UserLogin from './UserLogin';

describe('User Login Page', () => {
  test('should have a username input', () => {
    // Arrange...
    render(<UserLogin />);
    const userNameInput = screen.getByLabelText('Username/Email');
    // Act...

    // Assert...
    expect(userNameInput).toBeInTheDocument();
  });

  test('should have a password input', () => {
    // Arrange...
    render(<UserLogin />);
    const passwordInput = screen.getByLabelText('Password');
    // Act...

    // Assert...
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.type).toBe('password');
  });
  test('should have a login button', () => {
    // Arrange...
    render(<UserLogin />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    // Act...

    // Assert...
    expect(loginButton).toBeInTheDocument();
  });

  test('login button should initially be disabled', () => {
    // Arrange...
    render(<UserLogin />);
    const loginButton = screen.getByRole('button', { name: 'Login' });
    // Act...

    // Assert...
    expect(loginButton).toBeDisabled();
  });
});
