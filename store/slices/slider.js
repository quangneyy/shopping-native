import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import SliderService from '../../services/slider'

export const fetchSlider = createAsyncThunk(
    'slider/fetchSlider',
    async (data, thunkAPI) => {
        const respone = await SliderService.list(data)
        return respone.data
    }
  )

const categorySlice = createSlice({
    name : 'Slider',
    initialState : {
        items : [],
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSlider.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(fetchSlider.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

export const {} = categorySlice.actions
export default categorySlice.reducer


