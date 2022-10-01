import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchHotels = createAsyncThunk('hotel/fetchHotels', async ()=>{
  try{
      let loc = window.location.href
      var city_name = 'dublin'
      if (loc.includes('=')){
      city_name = loc.split('=').slice(-1)}
      let url = `/api/hotel/?city=${city_name}`
      let response = await axios.get(url)
      var details = response.data
      return details;
  }catch(err){
      console.log("Error in Fetching Details " + err.toString());
  }
})

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    hotel_details : [],
    display: false,
    status: 'idle',
    error: null,

  },
  reducers: {
    get_details: (state, action) =>{
        state.hotel_details = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state, action) => {
        if (state.status === 'idle') {
          state.status = 'pending'
        }
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.status = 'success'
        state.hotel_details = action.payload
        state.display = true
      })
      .addCase(fetchHotels.rejected, (state, action) => {
        state.status = 'failed'
        state.hotel_details = []
        state.error = action.error.message
      })
  },
})

// Action creators are generated for each case reducer function
export const { get_details } = hotelSlice.actions

export default hotelSlice.reducer