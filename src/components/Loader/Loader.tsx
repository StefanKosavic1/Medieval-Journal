import withHelloMessage from '../../hoc/withHelloMessage';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}
const Loader = ({ className }: LoaderProps) => {
  const combinedClassName = `loader ${className}`;
  return <div className={combinedClassName} data-testid="loader" />;
};

export default withHelloMessage(Loader);
