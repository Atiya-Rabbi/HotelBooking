import { createSlice } from '@reduxjs/toolkit'


export const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    hotel_details : [],

  },
  reducers: {
    get_details: (state, action) =>{
        state.hotel_details = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { get_details } = hotelSlice.actions

export default hotelSlice.reducer