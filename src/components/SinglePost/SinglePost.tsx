import { useNavigate } from 'react-router-dom';
import './SinglePost.scss';
import Button from '../../general/components/Button';
import { ButtonVariant } from '../../general/components/Button/Button';
import { PostProps } from '../../models/post';
import ConditionalPostFetch from './ConditionalPostFetch/ConditionalPostFetch';
import Comments from './Comments';
import withHelloMessage from '../../hoc/withHelloMessage';

const SinglePost = () => {
  const navigate = useNavigate();
  const onBackHandler = () => {
    navigate(-1);
  };
  return (
    <ConditionalPostFetch>
      {(currentPost: PostProps) => (
        <div className="post-details-modal">
          <div className="post-details-container">
            <h2 className="middle-page-title">{currentPost?.title}</h2>
            <p className="middle-page-text">{currentPost?.body}</p>
            <Button variant={ButtonVariant.Primary} onClick={onBackHandler}>
              Back to Posts
            </Button>
          </div>
          <Comments />
        </div>
      )}
    </ConditionalPostFetch>
  );
};

export default withHelloMessage(SinglePost);
