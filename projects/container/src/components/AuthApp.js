import { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import React from 'react';
import { useHistory } from 'react-router-dom';

const AuthApp = () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigation } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (!pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigation);
  }, []);

  return <div ref={ref}></div>;
};

export default AuthApp;
