import React from 'react';
import CountiesIndexTabs from './CountiesIndexTabs';
import CountiesList from './CountiesList';

const CountiesIndex = () => {
  return (
    <div>
      <CountiesIndexTabs />
      <CountiesList />
    </div>
  );
};

export default CountiesIndex;
