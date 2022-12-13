import React, { lazy, Suspense } from 'react';

const HeaderMegaMenu = lazy(() => import('./Header'));

const LazyHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={'...loading'}>
    <HeaderMegaMenu />
  </Suspense>
);

export default LazyHeader;
