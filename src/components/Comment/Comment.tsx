import React from 'react';
import { CommentProps } from '../../models/comment';
import withHelloMessage from '../../hoc/withHelloMessage';

const Comment: React.FC<CommentProps> = ({ name, email, body }) => {
  return (
    <div className="comment">
      <h4 className="comment-name">{name}</h4>
      <p className="comment-email">{email}</p>
      <p className="comment-body">{body}</p>
    </div>
  );
};

export default withHelloMessage<CommentProps>(Comment);
