import React, { useState, createContext } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Aside from './Aside';

export const DateContext = createContext();

const Main = ({ children }) => {
  const [open, setOpen] = useState(true);

  const [mockData, setMockData] = useState({
    id: 1,
    location: '제주',
    startDate: "",
    endDate: "",
  });
  
  const param = useParams();
  return (
    <DateContext.Provider value={{ mockData, setMockData, open, setOpen }}>
      {param.id ? <Aside /> : <Header />}
      <main className={param.id ? 'nomain' : 'main'}>
        {children}
      </main>
    </DateContext.Provider>
  )
}

export default Main