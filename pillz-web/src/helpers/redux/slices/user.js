import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    set: (state, action) => {
      state.user = action.payload;
    },
    reset: (state) => {
      state.user = null;
    },
  },
});

export const { set, reset } = userSlice.actions;

export default userSlice.reducer;
