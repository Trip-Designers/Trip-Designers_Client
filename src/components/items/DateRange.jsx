import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일 불러오기
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import Box from '@mui/material/Box'; // 버튼 배치용 Box 컴포넌트
import Button from '@mui/material/Button'; // MUI의 Button 컴포넌트
import Typography from '@mui/material/Typography'; // 텍스트 표시용 Typography 컴포넌트

dayjs.locale('ko'); // dayjs에 한국어 로케일 적용

const shortcutsItems = [
  {
    label: '이번 주', // 'This Week'를 '이번 주'로 변경
    getValue: () => {
      const today = dayjs();
      return [today.startOf('week'), today.endOf('week')];
    },
  },
  { label: '초기화', getValue: () => [null, null] }, // 'Reset'을 '초기화'로 변경
];

export default function DateRange() {
  const [dateRange, setDateRange] = useState([null, null]);

  const handleSubmit = () => {
    if (dateRange[0] && dateRange[1]) {
      const formattedStartDate = dateRange[0].format('YYYY-MM-DD');
      const formattedEndDate = dateRange[1].format('YYYY-MM-DD');

      // 서버로 전송하는 로직
      console.log('선택한 날짜:', { startDate: formattedStartDate, endDate: formattedEndDate });
    } else {
      alert('날짜를 선택해주세요.');
    }
  };

  return (
    <div id='datemodal'>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        {/* 캘린더 위에 텍스트 추가 */}
        <Box sx={{ padding: '10px', position: 'absolute', left: '48%', top: '15px' }}>
          <Typography variant="h6" gutterBottom align="center" style={{ fontSize: '25px', fontWeight: 'bold' }}>
            여행 기간을 선택해주세요
          </Typography>
        </Box>

        <StaticDateRangePicker
          value={dateRange}
          onChange={(newValue) => setDateRange(newValue)} // 날짜 선택 시 상태 업데이트
          slotProps={{
            shortcuts: {
              items: shortcutsItems,
            },
            actionBar: { actions: [] },
            // 커스텀 텍스트 설정
            toolbarTitle: '여행 기간이 어떻게 되시나요?',
          }}
          calendars={2}
        />
      </LocalizationProvider>

      {/* 모달 하단에 버튼 추가 */}
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
