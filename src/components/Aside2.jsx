import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RouteSection from './RouteSection';
import { useSelector, useDispatch } from 'react-redux';
import { setDay } from '../app/daySlice';

const Aside2 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const data = useSelector((state) => state.travel.data);
  const dispatch = useDispatch();

  const location = data?.data?.destination;
  const schedule = data?.data?.schedule || [];

  useEffect(() => {
    if (data) {
      localStorage.setItem('travelData', JSON.stringify(data));
    }
  }, [data]);

  const days = [
    { title: '전체 일정' }, 
    ...schedule.map((_, index) => ({
      title: `${index + 1}일차`,
    }))
  ];

  const handleNextStep = () => {
    if (currentStep < schedule.length) {
      setCurrentStep(prevStep => prevStep + 1);
      dispatch(setDay(currentStep + 1));
    }
  };

  const handleDayClick = (i) => {
    setCurrentStep(i);
    dispatch(setDay(i));  
  };

  return (
    <div id="aside">
      {/* Sidebar */}
      <aside className="aside__nav">
        <Link to={'/'} className='aside__img'>
          <img src="/img/Trip_Logo.png" alt="Logo" />
        </Link>
        <div className='nav'>
          <ul>
            {days.map((day, i) => (
              <li 
                key={i} 
                className={currentStep === i ? 'active' : ''} 
                onClick={() => handleDayClick(i)}
              >
                {day.title}
              </li>
            ))}
          </ul>
          <button onClick={handleNextStep}>다음</button>
        </div>
      </aside>

      {/* Itinerary content */}
      <div className="aside__info">
        {
          currentStep === 0 ? (
            <div>전체일정</div>
          ) : (
            <RouteSection schedule={schedule[currentStep - 1]} location={location} index={currentStep} />
          )
        }
      </div>
    </div>
  );
};

export default Aside2;
