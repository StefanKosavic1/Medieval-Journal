import { useState } from 'react';
import Loader from '../../components/Loader';
import Post from '../../components/Post';
import './PostsList.scss';
import useUserPosts from './hooks/useUserPosts';
import InputField from '../../general/components/FormComponents/InputField';
import debounce from '../../general/helpers/debounce';
import withHelloMessage from '../../hoc/withHelloMessage';
import NoUserFound from '../../general/components/NoUserFound';

const PostsList = () => {
  const { data, loading, error } = useUserPosts();
  const [filter, setFilter] = useState('');

  const handleChange = (value: string) => {
    setFilter(value);
  };
  const handleChangeDebounce = debounce(handleChange);

  const filteredPosts = data.filter(post =>
    post.user?.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <InputField
        placeholder={'Search traveler...'}
        onChange={handleChangeDebounce}
      />
      <div className="posts-lists-container">
        {!filteredPosts.length ? (
          <NoUserFound />
        ) : (
          filteredPosts.map(post => {
            return <Post key={post.id} {...post} />;
          })
        )}
      </div>
    </>
  );
};

export default withHelloMessage(PostsList);
