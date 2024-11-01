import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  position: [null, null],
}

const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    setPosition: (state, action) => {
      const { location, position } = action.payload;
      state.location = location;
      state.position = position;
    },
    setPositionXY: (state, action) => {
      state.position = action.payload;
    }
  }
})

export const { setPosition, setPositionXY } = positionSlice.actions;

export  default positionSlice.reducer;