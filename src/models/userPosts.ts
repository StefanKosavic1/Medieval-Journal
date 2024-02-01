import { PostProps } from './post';
import { UserProps } from './user';

export interface UserPostProps extends PostProps {
  user?: UserProps;
}
