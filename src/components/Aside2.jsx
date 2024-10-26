import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
            <li className={currentStep === 1 ? 'active' : ''}>1일차</li>
            <li className={currentStep === 2 ? 'active' : ''}>2일차</li>
          </ul>
          <button onClick={handleNextStep}>다음</button>
        </div>
      </aside>

      {/* 각 단계별 컨텐츠 */}
      <div className="aside__info">
        {currentStep === 1 && (
          <div>123</div>
        )}
        {currentStep === 2 && (
          <div>456</div>
        )}
      </div>
    </div>
  )
}

export default Aside2