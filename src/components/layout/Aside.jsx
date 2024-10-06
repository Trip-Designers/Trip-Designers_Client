import React, { useState } from 'react';
import Step1DateSelection from '../Step1DateSelection';
import Step2LocationSelection from '../Step2LocationSelection';
import Step3AccommodationSetup from '../Step3AccommodationSetup';

const Aside = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // 다음 단계로 이동
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  return (
    <div id='aside'>
      {/* 사이드바 - 현재 단계 표시 */}
      <aside className="aside__nav">
        <div className='aside__img'>
          <img src="/img/Trip_Logo.png" alt="Logo" />
        </div>
        <div className='nav'>
          <ul>
            <li className={currentStep === 1 ? 'active' : ''}>Step 1<br /> 날짜 확인</li>
            <li className={currentStep === 2 ? 'active' : ''}>Step 2<br /> 장소 선택</li>
            <li className={currentStep === 3 ? 'active' : ''}>Step 3<br /> 숙소 설정</li>
          </ul>
          <button onClick={handleNextStep} disabled={currentStep === 3}>다음</button>
        </div>
      </aside>

      {/* 각 단계별 컨텐츠 */}
      <div className="aside__info">
        {currentStep === 1 && (
          <Step1DateSelection onNext={handleNextStep} />
        )}
        {currentStep === 2 && (
          <Step2LocationSelection onNext={handleNextStep} />
        )}
        {currentStep === 3 && (
          <Step3AccommodationSetup />
        )}
      </div>
    </div>
  );
};

export default Aside;
