import { PostProps } from '../../../models/post';
import useFetchData from '../../../hooks/useFetchData';
import { getPosts } from '../../../general/api/services/post';
import { getUsers } from '../../../general/api/services/users';
import { UserProps } from '../../../models/user';
import { UserPostProps } from '../../../models/userPosts';

const useUserPosts = () => {
  const {
    data: posts,
    loading: loadingPosts,
    error: errorPosts,
  } = useFetchData<PostProps[]>(getPosts);
  const {
    data: users,
    loading: loadingUsers,
    error: errorUsers,
  } = useFetchData<UserProps[]>(getUsers);

  const isLoading = loadingPosts || loadingUsers;
  const isError = errorPosts || errorUsers;
  let postsWithUsers: UserPostProps[] = [];
  if (posts && users) {
    postsWithUsers = posts.map(post => {
      const user = users.find(user => user.id === post.userId);
      return { ...post, user };
    });
  }
  return { data: postsWithUsers, loading: isLoading, error: isError };
};

export default useUserPosts;
