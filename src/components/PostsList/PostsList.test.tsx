import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostsList from './PostsList';
import * as useUserPostsHook from './hooks/useUserPosts';
import { UserPostProps } from '../../models/userPosts';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../general/helpers/debounce', () => jest.fn(fn => fn));

jest.mock(
  '../../hoc/withHelloMessage',
  () => (Component: any) => (props: any) => <Component {...props} />
);

describe('PostsList', () => {
  const mockPosts: UserPostProps[] = [
    {
      userId: 1,
      id: 1,
      title: 'Test Post',
      body: 'Testiramooo!',
      user: {
        id: 1,
        name: 'Stefan Kosavic',
        username: 'stefankosavic',
        email: 'stefan@gmail.com',
      },
    },
    {
      userId: 2,
      id: 2,
      title: 'MARKO Post',
      body: 'LAZAREVIC!',
      user: {
        id: 2,
        name: 'Marko Lazarevic',
        username: 'markolazarevic',
        email: 'marko@gmail.com',
      },
    },
  ];

  beforeEach(() => {
    jest.spyOn(useUserPostsHook, 'default').mockReturnValue({
      data: mockPosts,
      loading: false,
      error: null,
    });
  });

  it('renders posts and allows filtering', async () => {
    render(
      <Router>
        <PostsList />
      </Router>
    );

    expect(screen.getByText('Test Post')).toBeInTheDocument();

    const input = screen.getByPlaceholderText('Search traveler...');
    fireEvent.change(input, { target: { value: 'Stefan' } });

    await waitFor(() => {
      expect(screen.queryByText('Another Post')).not.toBeInTheDocument();
    });
  });
});
