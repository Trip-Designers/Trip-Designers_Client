import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker  } from 'react-date-range';
import { useState } from 'react';

// 달력 왼쪽에 선택하는 부분 제거
const elements = document.getElementsByClassName('rdrDefinedRangesWrapper');
if (elements.length > 0) {
  elements[0].remove();
}

export const DateCalendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ])
  console.log(state);
  return (
    <DateRangePicker 
      onChange={item => setState([item.selection])}
      showSelectionPreview={false}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
    />
  )
}