import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  day: 0  // 초기 day 값을 설정
};

const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload;  
    },
    resetDay: (state) => {
      state.day = 0;  
    }
  }
});

// 액션과 리듀서 내보내기
export const { setDay, resetDay } = daySlice.actions;
export default daySlice.reducer;
