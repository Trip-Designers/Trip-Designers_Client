import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Route from './items/Route';
import RouteSection from './RouteSection';

const days = [
  {
    title: '1일차',
  },
  {
    title: '2일차',
  },
  {
    title: '3일차',
  }
]

const Aside2 = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // 다음 단계로 이동
  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };
  return (
    <div id="aside">
      {/* 사이드바 - 현재 단계 표시 */}
      <aside className="aside__nav">
        <Link to={'/'} className='aside__img'>
          <img src="/img/Trip_Logo.png" alt="Logo" />
        </Link>
        <div className='nav'>
          <ul>
            {days.map((day, i) => (
              <li key={i} className={currentStep === i ? 'active' : ''} onClick={() => setCurrentStep(i)}>{day.title}</li>
            ))}
          </ul>
          <button onClick={handleNextStep}>다음</button>
        </div>
      </aside>

      {/* 각 단계별 컨텐츠 */}
      <div className="aside__info">
        <RouteSection />
      </div>
    </div>
  )
}

export default Aside2