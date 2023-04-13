import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: null,
  lastName: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    setProfileSuccess: (state, { payload: { firstName, lastName } }) => {
      state.loading = false;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    setProfileFailure: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
    },
    clearProfile: (state) => {
      state.firstName = null;
      state.lastName = null;
    },
  },
});

export const { setProfileStart, setProfileSuccess, setProfileFailure, clearProfile  } = profileSlice.actions;

export default profileSlice.reducer;