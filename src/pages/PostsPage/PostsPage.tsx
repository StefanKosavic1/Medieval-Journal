import PostsList from '../../components/PostsList';
import Title from '../../general/components/Title';
import withHelloMessage from '../../hoc/withHelloMessage';

const PostsPage = () => {
  return (
    <>
      <Title text="The Medieval Journal" />
      <PostsList />
    </>
  );
};

export default withHelloMessage(PostsPage);
