// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainForgeMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainForgeMax/i);
    expect(titleElement).toBeInTheDocument();
});
