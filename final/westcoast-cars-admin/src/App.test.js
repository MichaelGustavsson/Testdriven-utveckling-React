import { render, screen } from '@testing-library/react';
import App from './App';

describe('App componenten', () => {
  test('renders learn more react link', () => {
    // Arrange...
    render(<App />);

    // Act...
    const linkElement = screen.getByText(/learn more react/i);

    // Assert...
    expect(linkElement).toBeInTheDocument();
  });
});
