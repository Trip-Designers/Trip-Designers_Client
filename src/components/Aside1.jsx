import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// 컴포넌트
import Step1DateSelection from './Step1DateSelection'
import Step2SelectTheme from './Step2SelectTheme';

const Aside1 = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // 다음 단계로 이동
  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };
  return (
    <div id='aside'>
      {/* 사이드바 - 현재 단계 표시 */}
      <aside className="aside__nav">
        <Link to={'/'} className='aside__img'>
          <img src="/img/Trip_Logo.png" alt="Logo" />
        </Link>
        <div className='nav'>
          <ul>
            <li className={currentStep === 1 ? 'active' : ''}>Step 1<br /> 날짜 확인</li>
            <li className={currentStep === 2 ? 'active' : ''}>Step 2<br /> 테마 선택</li>
          </ul>
          <button onClick={handleNextStep}>다음</button>
        </div>
      </aside>

      {/* 각 단계별 컨텐츠 */}
      <div className="aside__info">
        {currentStep === 1 && (
          <Step1DateSelection onNext={handleNextStep} />
        )}
        {currentStep === 2 && (
          <Step2SelectTheme onNext={handleNextStep} />
        )}
      </div>
    </div>
  )
}

export default Aside1