import { screen, render } from '@testing-library/react';

import App from './App';

describe('Routing', () => {
  const setup = () => render(<App />);
  test.each`
    path          | componentTestId
    ${'/'}        | ${'vehicle-list-component'}
    ${'/users'}   | ${'user-list-component'}
    ${'/adduser'} | ${'add-user-component'}
  `(
    'display $componentTestId when path is $path',
    ({ path, componentTestId }) => {
      // Arrange
      window.history.pushState({}, '', path);
      setup();
      const elem = screen.queryByTestId(componentTestId);

      // Assert
      expect(elem).toBeInTheDocument();
    },
  );

  test.each`
    path          | componentTestId
    ${'/'}        | ${'user-list-component'}
    ${'/users'}   | ${'vehicle-list-component'}
    ${'/adduser'} | ${'vehicle-list-component'}
    ${'/adduser'} | ${'user-list-component'}
  `(
    'does not display $componentTestId when path is $path',
    ({ path, componentTestId }) => {
      // Arrange
      window.history.pushState({}, '', path);
      setup();
      const elem = screen.queryByTestId(componentTestId);

      // Assert
      expect(elem).not.toBeInTheDocument();
    },
  );
});
