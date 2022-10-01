import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from '../features/hotel/hotelSlice'
import singleHotelReducer from '../features/hotel/singleHotelSlice'

export default configureStore({
  reducer: {
    hotel: hotelReducer,
    singleHotel: singleHotelReducer,
  },
})