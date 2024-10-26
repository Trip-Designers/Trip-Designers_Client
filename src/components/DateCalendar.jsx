import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from '../app/travleSlice';
import Button from './items/Button';

export const DateCalendar = ({ onClick }) => {
  const dispatch = useDispatch();
  const travel = useSelector((state) => state.travel);

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

  const handleDateChange = (item) => {
    const { startDate, endDate } = item.selection;
    setState([item.selection]);
    // 로컬 날짜로 변환하여 Redux에 업데이트
    dispatch(setStartDate(startDate.toLocaleDateString('sv-SE')));
    dispatch(setEndDate(endDate.toLocaleDateString('sv-SE')));
  };

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
      <div>
        <Button onClick={onClick} text={'완료'} />
      </div>
    </div>
  );
};
