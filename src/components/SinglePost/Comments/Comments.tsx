import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getCommentsById } from '../../../general/api/services/comment';
import Title from '../../../general/components/Title';
import useFetchData from '../../../hooks/useFetchData';
import { CommentProps } from '../../../models/comment';
import Loader from '../../../general/components/Loader';
import Comment from '../../Comment';
import './Comments.scss';
import withHelloMessage from '../../../hoc/withHelloMessage';

function Comments() {
  const { id } = useParams<{ id: string }>();
  const fetchComments = useCallback(() => getCommentsById(id), [id]);
  const { data: comments, loading } =
    useFetchData<CommentProps[]>(fetchComments);
  return (
    <div className="comments-container">
      {loading ? (
        <Loader className="comments-list-loader" />
      ) : (
        <div className="single-post-comments-scroll">
          <Title text="Comments" />
          {comments?.map((comment: JSX.IntrinsicAttributes & CommentProps) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      )}
    </div>
  );
}

export default withHelloMessage(Comments);
