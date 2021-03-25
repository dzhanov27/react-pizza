import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={2}
      width={260}
      height={500}
      viewBox='0 0 280 460'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='6' ry='6' width='280' height='460' />
    </ContentLoader>
  );
}

export default LoadingBlock;
