import { mount } from 'marketing/MarketingApp';
import React from 'react';
import { useEffect, useRef } from 'react';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div id='marketing' ref={ref}></div>;
};

export default MarketingApp;
