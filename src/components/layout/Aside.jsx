import React from 'react';
import { useLocation } from 'react-router-dom';
import Aside1 from '../Aside1';
import Aside2 from '../Aside2';

const Aside = () => {
  const location = useLocation();
  return (
    <div>
      {
        location.pathname === '/planning' ? <Aside1 /> : <Aside2 />
      }
    </div>
  );
};

export default Aside;
