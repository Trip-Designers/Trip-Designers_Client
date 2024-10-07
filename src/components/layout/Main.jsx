import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import Aside from './Aside';

const Main = ({ children }) => {
  const param = useParams();
  return (
    <div>
      {param.id ? <Aside /> : <Header />}
      <main id='main' className={param.id ? 'main' : ''}>
        {children}
      </main>
    </div>
  )
}

export default Main