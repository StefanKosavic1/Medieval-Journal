import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from './InputField';

describe('InputField', () => {
  it('show input field', () => {
    const handleChange = jest.fn();
    render(<InputField placeholder="Enter text" onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'haloo' } });
    expect(handleChange).toHaveBeenCalledWith('haloo');
  });

  it('show provided label', () => {
    const label = 'Test Label';
    render(<InputField label={label} placeholder="Enter text" />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });
});
