import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from '../features/hotel/hotelSlice'

export default configureStore({
  reducer: {
    hotel: hotelReducer,
  },
})