import React from 'react'
import Header from './Header'
import Aside from './Aside';
import { useLocation } from 'react-router-dom';

const Main = ({ children }) => {

  const location = useLocation();
  
  return (
    <>
      {location.pathname === '/' ? <Header /> : <Aside />}
      <main 
        className={location.pathname !== '/' ? 'nomain' : 'main'}
      >
        {children}
      </main>
    </>
  )
}

export default Main