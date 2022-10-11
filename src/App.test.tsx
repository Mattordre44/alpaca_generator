import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Alpaca generator title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Alpaca Generator/i);
  expect(linkElement).toBeInTheDocument();
});
