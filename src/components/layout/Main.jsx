import React, { useState, createContext } from 'react'
import Header from './Header'
import Aside from './Aside';
import { useLocation } from 'react-router-dom';

export const DateContext = createContext();

const Main = ({ children }) => {
  const [open, setOpen] = useState(true);

  const [mockData, setMockData] = useState({
    id: 1,
    location: '제주',
    startDate: "",
    endDate: "",
  });

  const location = useLocation();
  console.log(location.pathname)
  
  return (
    <DateContext.Provider value={{ mockData, setMockData, open, setOpen }}>
      {location.pathname === '/planning' ? <Aside /> : <Header />}
      <main className={location.pathname !== '/' ? 'nomain' : 'main'}>
        {children}
      </main>
    </DateContext.Provider>
  )
}

export default Main