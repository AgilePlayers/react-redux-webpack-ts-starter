import React from 'react';

import './loader.scss';

const LoaderComponent: React.SFC = () => (
  <>
    <h1>Loader</h1>
    <div className="loader">Data is loading...</div>
    <div className="loader-spinner" />
  </>
);

export default LoaderComponent;
