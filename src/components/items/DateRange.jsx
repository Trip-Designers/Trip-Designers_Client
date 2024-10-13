import React, { useContext, useState } from 'react';
import { DateContext } from '../layout/Main';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

dayjs.locale('ko');

const shortcutsItems = [
  {
    label: '이번 주',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('week'), today.endOf('week')];
    },
  },
  { label: '초기화', getValue: () => [null, null] },
];

export default function DateRange({ close }) {
  const { mockData, setMockData } = useContext(DateContext);
  const [dateRange, setDateRange] = useState([null, null]);

  const handleSubmit = () => {
    if (dateRange[0] && dateRange[1]) {
      const formattedStartDate = dateRange[0].format('YYYY-MM-DD');
      const formattedEndDate = dateRange[1].format('YYYY-MM-DD');

      // DateContext의 데이터를 업데이트
      setMockData({
        ...mockData,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      });
      close();
      console.log('선택한 날짜:', { startDate: formattedStartDate, endDate: formattedEndDate });
    } else {
      alert('날짜를 선택해주세요.');
    }
  };

  return (
    <div id='datemodal'>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <Box sx={{ padding: '10px', position: 'absolute', left: '48%', top: '15px' }}>
          <Typography variant="h6" gutterBottom align="center" style={{ fontSize: '25px', fontWeight: 'bold' }}>
            여행 기간을 선택해주세요
          </Typography>
        </Box>

        <StaticDateRangePicker
          value={dateRange}
          onChange={(newValue) => setDateRange(newValue)}
          slotProps={{
            shortcuts: {
              items: shortcutsItems,
            },
            actionBar: { actions: [] },
            toolbarTitle: '여행 기간이 어떻게 되시나요?',
          }}
          calendars={2}
        />
      </LocalizationProvider>

      <Box sx={{ textAlign: 'right', padding: '10px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: '10px', position: 'absolute', right: '10px', bottom: '30px' }}
        >
          전송
        </Button>
      </Box>
    </div>
  );
}
