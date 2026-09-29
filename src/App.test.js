import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the 3D projects page with the embedded ocean demo', () => {
  window.history.pushState({}, '', '/3d-projects');

  render(<App />);

  expect(screen.getByRole('heading', { name: /3d art projects/i })).toBeInTheDocument();
  expect(screen.getByTitle(/ocean demo/i)).toBeInTheDocument();
});
