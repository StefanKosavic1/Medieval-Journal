import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserPostProps } from '../models/userPosts';
import withHelloMessage from '../hoc/withHelloMessage';

interface PostContextTypeProps {
  currentPost: UserPostProps | null;
  setCurrentPost: (post: UserPostProps | null) => void;
}

const PostContext = createContext<PostContextTypeProps>({
  currentPost: null,
  setCurrentPost: () => {},
});

const usePostContext = () => useContext(PostContext);

interface PostProviderProps {
  children: ReactNode;
}
const PostProvider: React.FC<PostProviderProps> = withHelloMessage(
  ({ children }) => {
    const [currentPost, setCurrentPost] = useState<UserPostProps | null>(null);

    return (
      <PostContext.Provider value={{ currentPost, setCurrentPost }}>
        {children}
      </PostContext.Provider>
    );
  }
);
export { usePostContext, PostProvider };
