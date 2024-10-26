import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: "",
  startDate: "",
  endDate: "",
  theme: ""
}

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setTravelInfo: (state, action) => {
      const { location, startDate, endDate, theme } = action.payload;
      state.location = location;
      state.startDate = startDate;
      state.endDate = endDate;
      state.theme = theme;
    },
    resetTravel: (state) => {
      // 초기 상태로 되돌리기
      state.location = "";
      state.startDate = "";
      state.endDate = "";
      state.theme = "";
    }
  }
});

export const { setLocation, setStartDate, setEndDate, setTheme, setTravelInfo, resetTravel } = travelSlice.actions;

// 리듀서 내보내기
export default travelSlice.reducer;
