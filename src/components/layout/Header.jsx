import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
      <div className='header__inner'>
        <div className='header__img'>
          <Link to={'/'}>
            <img src="/img/Trip_Logo.png" alt="Logo" />
          </Link>
        </div>
        <nav className='header__nav'>
          <ul>
            <li>
              <Link to={'https://korean.visitkorea.or.kr/list/travelinfo.do?service=ms'}>여행지</Link>
            </li>
            <li>
              <Link to={'/'}>이용방법</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header