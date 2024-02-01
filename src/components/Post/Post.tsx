import React, { useState } from 'react';
import { UserPostProps } from '../../models/userPosts';
import './Post.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../general/components/Button';
import { ButtonVariant } from '../../general/components/Button/Button';
import CommentsList from '../CommentsList';
import { usePostContext } from '../../context/PostContext';
import withHelloMessage from '../../hoc/withHelloMessage';

const Post: React.FC<UserPostProps> = ({ ...post }) => {
  const { setCurrentPost } = usePostContext();
  const [areCommentsOpened, setAreCommentsOpened] = useState(false);
  const navigate = useNavigate();

  const toggleComments = () => {
    setAreCommentsOpened(!areCommentsOpened);
  };

  const handleOpenDetailPost = () => {
    setCurrentPost(post);
    navigate(`/posts/${post.id}`);
  };

  return (
    <div
      className="post-container"
      style={{ height: areCommentsOpened ? '600px' : '300px' }}
    >
      <div>
        <p className="author-name">{post?.user?.name}</p>
        <h3 className="comments-list-post-title">{post.title}</h3>
      </div>
      <p className="comments-list-post-text">{post.body}</p>
      {areCommentsOpened && <CommentsList postId={`${post.id}`} />}
      <Button variant={ButtonVariant.Primary} onClick={toggleComments}>
        {areCommentsOpened ? 'Hide comments' : 'Show comments'}
      </Button>
      <Button variant={ButtonVariant.Secondary} onClick={handleOpenDetailPost}>
        Check details
      </Button>
    </div>
  );
};

export default withHelloMessage<UserPostProps>(Post);
