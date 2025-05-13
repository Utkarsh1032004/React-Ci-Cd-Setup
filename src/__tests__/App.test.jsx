import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App';
import { expect } from 'vitest';

test('render Vite + React text', () => {
    render(<App />);
    const headerElement = screen.getByText(/Vite \+ React/i);
    expect(headerElement).toBeInTheDocument();
});

test('increment count on button click', () =>{
    render(<App />)
    const buttonElement = screen.getByText(/count is 0/i);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 2');
})