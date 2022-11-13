import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('./Header'));

const LazyHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={'...loading'}>
    <Header />
  </Suspense>
);

export default LazyHeader;
