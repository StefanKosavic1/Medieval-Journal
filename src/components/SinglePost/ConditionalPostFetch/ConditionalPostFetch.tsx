import { useParams } from 'react-router-dom';
import { usePostContext } from '../../../context/PostContext';
import { useCallback } from 'react';
import { getPostById } from '../../../general/api/services/post';
import useFetchData from '../../../hooks/useFetchData';
import { PostProps } from '../../../models/post';
import withHelloMessage from '../../../hoc/withHelloMessage';

interface ConditionalPostFetchProps {
  children: (currentPost: PostProps) => JSX.Element;
}
const ConditionalPostFetch = ({ children }: ConditionalPostFetchProps) => {
  const { currentPost } = usePostContext();
  if (currentPost) return children(currentPost);

  const SinglePostWithFetch = () => {
    const { id } = useParams<{ id: string }>();
    const fetchPost = useCallback(() => getPostById(id), [id]);
    const { data: post } = useFetchData<PostProps>(fetchPost);
    if (!post) return null;
    return children(post);
  };
  return <SinglePostWithFetch />;
};

export default withHelloMessage<ConditionalPostFetchProps>(
  ConditionalPostFetch
);
