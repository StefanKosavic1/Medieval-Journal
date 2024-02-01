import AppProvider from './general/providers/AppProvider';
import withHelloMessage from './hoc/withHelloMessage';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />;
    </AppProvider>
  );
};

export default withHelloMessage(App);
