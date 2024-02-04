import { useCallback } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { CommentProps } from '../../models/comment';
import Loader from '../../general/components/Loader';
import Comment from '../Comment';
import './CommentsList.scss';
import { getCommentsById } from '../../general/api/services/comment';
import withHelloMessage from '../../hoc/withHelloMessage';

interface CommentsListProps {
  postId: string;
}

function CommentsList({ postId }: CommentsListProps) {
  const fetchComments = useCallback(() => getCommentsById(postId), [postId]);
  const {
    data: comments,
    loading,
    error,
  } = useFetchData<CommentProps[]>(fetchComments);

  if (loading) return <Loader className="comments-list-loader" />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="comments-list-container">
        {comments &&
          comments.map(comment => <Comment key={comment.id} {...comment} />)}
      </div>
    </>
  );
}

export default withHelloMessage(CommentsList);
