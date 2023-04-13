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
    loginSuccess: (state, { payload: token  }) => {
      localStorage.setItem('token', token)

      state.loading = false;
      state.token = token;
      state.isAuthenticated = true;
    },
    loginFailure: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
      state.isAuthenticated = false;
    },
    restoreToken: (state, { payload: token }) => {
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem('token')
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, restoreToken, logout } = authSlice.actions;

export default authSlice.reducer;