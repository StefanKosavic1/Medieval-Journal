import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './Title';

describe('Title', () => {
  it('renders the provided title text', () => {
    const testText = 'Newspaper are old';
    render(<Title text={testText} />);

    const titleElement = screen.getByText(testText);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('medieval-title');
  });
});
