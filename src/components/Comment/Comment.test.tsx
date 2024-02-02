import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Comment from './Comment'; // Adjust the import path as necessary

describe('Comment Component', () => {
  const mockProps = {
    name: 'Stefan Kosavic',
    email: 'stefan.kosavic@example.com',
    body: 'New comment.',
  };

  it('renders the comment with the correct content', () => {
    render(<Comment postId={0} id={0} {...mockProps} />);

    const nameElement = screen.getByText(mockProps.name);
    const emailElement = screen.getByText(mockProps.email);
    const bodyElement = screen.getByText(mockProps.body);

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });
});
