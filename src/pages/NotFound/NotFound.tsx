import withHelloMessage from '../../hoc/withHelloMessage';
import './NotFound.scss';

const NotFound = () => (
  <div className="not-found-container">
    <h1 className="not-found-text-color">404 - Page Not Found</h1>
    <p className="not-found-text-color">
      The page you are looking for does not exist.
    </p>
  </div>
);

export default withHelloMessage(NotFound);
