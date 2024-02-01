import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from '../../components/Loader';
import Layout from '../components/Layouts/MainLayout';
import { PostProvider } from '../../context/PostContext';
import NotFound from '../../pages/NotFound';
import ErrorBoundary from '../components/ErrorBoundary';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <Router>
      <PostProvider>
        <Layout>
          <ErrorBoundary fallback={<NotFound />}>
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </ErrorBoundary>
        </Layout>
      </PostProvider>
    </Router>
  );
};

export default AppProvider;
