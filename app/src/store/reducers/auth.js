import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      const token = action.payload
      localStorage.setItem('token', token)

      state.loading = false;
      state.token = token;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.isAuthenticated = false;
    },
    restoreToken: (state, action) => {
      const token = action.payload
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = false;
      state.isAuthenticated = false;

      localStorage.removeItem('token')
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, restoreToken, logout } = authSlice.actions;

export default authSlice.reducer;