import { mount } from 'marketing/MarketingApp';
import React from 'react';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigation } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigation);
  }, []);

  return <div id='marketing' ref={ref}></div>;
};

export default MarketingApp;
