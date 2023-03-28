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
    loginSuccess: (state, { payload: { token, remember } }) => {
      localStorage.setItem('token', token)

      state.loading = false;
      state.token = token;
      state.isAuthenticated = true;
    },
    loginFailure: (state, { payload: token }) => {
      state.loading = false;
      state.token = token;
      state.isAuthenticated = false;
    },
    restoreToken: (state, { payload: token }) => {
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