import React, { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SinglePost from './SinglePost';
import { BrowserRouter } from 'react-router-dom';
import { PostProps } from '../../models/post';

interface MockButtonProps {
  children: ReactNode;
  onClick: () => void;
}

jest.mock(
  '../../general/components/Button',
  () =>
    ({ children, onClick }: MockButtonProps) => (
      <button onClick={onClick}>{children}</button>
    )
);
jest.mock('./Comments', () => () => <div>Comments Component</div>);
jest.mock(
  './ConditionalPostFetch/ConditionalPostFetch',
  () =>
    ({ children }: { children: (post: PostProps) => ReactNode }) =>
      children({
        title: 'Test Title',
        body: 'Test Body',
        userId: 0,
        id: 0,
      })
);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('SinglePost', () => {
  it('renders the post details and navigates back on button click', () => {
    render(
      <BrowserRouter>
        <SinglePost />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();

    expect(screen.getByText('Comments Component')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Back to Posts'));
  });
});
