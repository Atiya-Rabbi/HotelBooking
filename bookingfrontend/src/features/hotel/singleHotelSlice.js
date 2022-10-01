import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchSingleHotel = createAsyncThunk('hotel/fetchSingleHotel', async (hotel_id)=>{
    try{
        let url = `/api/hotel/?hotel_id=${hotel_id}`
        let response = await axios.get(url)
        var details = response.data
        return details;
    }catch(err){
        console.log("Error in Fetching Details " + err.toString());
    }
})
  
export const singleHotelSlice = createSlice({
    name: 'singleHotel',
    initialState: {
        hotel_id: '',
        hotel_name :'',
        hotel_adrs: '',
        hotel_facilities: [],
        hotel_imgs: [],
        hotel_rooms: [],
        hotel_desc:'',
        status: 'idle',
        error: null,

    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleHotel.pending, (state, action) => {
                console.log('state----',action.payload)
                if (state.status === 'idle') {
                state.status = 'pending'
                }
            })
            .addCase(fetchSingleHotel.fulfilled, (state, action) => {
                state.status = 'success'
                state.hotel_id = action.payload.hotel_id
                state.hotel_name = action.payload.hotel_name
                state.hotel_adrs = action.payload.address
                state.hotel_facilities = action.payload.facility
                state.hotel_imgs = action.payload.images
                state.hotel_rooms = action.payload.room
                state.hotel_desc = action.payload.description
            })
            .addCase(fetchSingleHotel.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default singleHotelSlice.reducer