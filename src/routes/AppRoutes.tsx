import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import withHelloMessage from '../hoc/withHelloMessage';

const PostsPage = React.lazy(() => import('../pages/PostsPage'));
const PostDetails = React.lazy(() => import('../pages/PostDetails'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default withHelloMessage(AppRoutes);
