import React, { useState } from 'react'

const Step3AccommodationSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(1);
  }

  const handlePrevStep = () => {
    setCurrentStep(2);
  }
  return (
    <div id='step2'>
      <div className='step2__top'>
        <h1>제주</h1>
        <span>2024.10.15(화)</span>&nbsp;-&nbsp;<span>2024.10.17(목)</span>
        <ul>
          <li onClick={handleNextStep} className={currentStep === 1 ? 'active' : ''}>숙소 설정</li>
          <li onClick={handlePrevStep} className={currentStep === 2 ? 'active' : ''}>신규 숙소 등록</li>
        </ul>
      </div>
      <div className='step2__bottom'></div>
    </div>
  )
}

export default Step3AccommodationSetup