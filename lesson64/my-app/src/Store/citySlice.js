import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCity = createAsyncThunk('city/fetchCity', async (city) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1417b42c7af44b368bc170606221411&q=${city}&aqi=no`
  );
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    return response;
  }
});

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    city: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      state.city = action.payload;
    });
  },
});

export const selectCity = (state) => state.city.city;

export const { addCity } = citySlice.actions;

export default citySlice.reducer;
