import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// 라이브러리
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// 리덕스
import { setStartDate, setEndDate } from '../app/travleSlice';
// 컴포넌트
import Button from './items/Button';

export const DateCalendar = ({ onClick }) => {
  const dispatch = useDispatch();
  const travel = useSelector((state) => state.travel);

  // 유효한 날짜인지 확인하는 함수
  const getValidDate = (date) => {
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
  };

  const [state, setState] = useState([
    {
      startDate: getValidDate(travel.startDate),
      endDate: getValidDate(travel.endDate),
      key: 'selection',
    }
  ]);
  // 달력에서 날짜 선택하면 날짜 변경
  const handleDateChange = (item) => {
    const { startDate, endDate } = item.selection;
    setState([item.selection]);
    // 로컬 날짜로 변환하여 Redux에 업데이트
    dispatch(setStartDate(startDate.toLocaleDateString('sv-SE')));
    dispatch(setEndDate(endDate.toLocaleDateString('sv-SE')));
  };
  // 달력 컴포넌트에서 필요없는 필드 제거
  useEffect(() => {
    const elements = document.getElementsByClassName('rdrDefinedRangesWrapper');
    if (elements.length > 0) {
      elements[0].remove();
    }
  }, []);

  return (
    <div id="dateCalendar">
      <DateRangePicker 
        onChange={handleDateChange}
        showSelectionPreview={false}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
      <div style={{borderRadius: '6px'}}>
        <Button onClick={onClick} text={'완료'} />
      </div>
    </div>
  );
};
