import React, { lazy, Suspense } from 'react';

const LazyUserList = lazy(() => import('./UserList'));

const UserList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserList {...props} />
  </Suspense>
);

export default UserList;
