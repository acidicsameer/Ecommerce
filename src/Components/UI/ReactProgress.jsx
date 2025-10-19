import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ReactProgress = () => {
  const location = useLocation();

  NProgress.configure({ showSpinner: false, minimum: 0.1 });

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300); 

    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

  return null;
};

export default ReactProgress;
