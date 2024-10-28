import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destination: "",
  startDate: "",
  endDate: "",
  theme: "",
  data: JSON.parse(localStorage.getItem('travelData')) || null
}

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload;
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
      const { destination, startDate, endDate, theme } = action.payload;
      state.destination = destination;
      state.startDate = startDate;
      state.endDate = endDate;
      state.theme = theme;
    },
    resetTravel: (state) => {
      // 초기 상태로 되돌리기
      state.destination = "";
      state.startDate = "";
      state.endDate = "";
      state.theme = "";
    },
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setDestination, setStartDate, setEndDate, setTheme, setTravelInfo, resetTravel, setData } = travelSlice.actions;

// 리듀서 내보내기
export default travelSlice.reducer;
