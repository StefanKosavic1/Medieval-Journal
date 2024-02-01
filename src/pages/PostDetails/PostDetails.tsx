import SinglePost from '../../components/SinglePost';
import withHelloMessage from '../../hoc/withHelloMessage';

const PostDetails = () => {
  return <SinglePost />;
};

export default withHelloMessage(PostDetails);
