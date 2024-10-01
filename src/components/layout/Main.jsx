import React from 'react'
import Header from './Header'

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <main id='main'>
        {children}
      </main>
    </div>
  )
}

export default Main