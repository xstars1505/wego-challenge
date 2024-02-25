import React from 'react';
import ContentLoader from 'react-content-loader';

const FoodLoader = () => (
  <ContentLoader
    data-testid="food-loader"
    width={'100%'}
    backgroundColor="#fff"
    foregroundColor="#dedede"
    speed={2}
    height={300}
    viewBox="0 0 400 460"
    preserveAspectRatio="none"
  >
    <rect x="0" y="0" rx="8" ry="8" width="100%" height="400" />
    <rect x="0" y="416" rx="8" ry="8" width="176" height="14" />
    <rect x="0" y="442" rx="8" ry="8" width="80" height="14" />
    <rect x="90" y="442" rx="8" ry="8" width="80" height="14" />
    <rect x="180" y="442" rx="8" ry="8" width="80" height="14" />
  </ContentLoader>
);

export default FoodLoader;
