import { render, screen } from '@testing-library/react';

import RegisterUser from './RegisterUser';

describe('Register User Component', () => {
  describe('Register User Page', () => {
    it('has a header saying Register User', () => {
      // Arrange...
      render(<RegisterUser />);
      const titleText = screen.getByRole('heading', {
        name: 'Användar registrering',
      });
      // Act...

      // Assert...
      expect(titleText).toBeInTheDocument();
    });
  });
});
