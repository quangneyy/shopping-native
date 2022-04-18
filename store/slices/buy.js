import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import BuyService from '../../services/buy'

export const fetchAsyncBuy = createAsyncThunk(
    'auth/fetchAsyncBuy',
    async (data, thunkAPI) => {
        const respone = await BuyService.buy(data)
        return respone.data
    }
)

export const fetchAsyncListSingle = createAsyncThunk(
    'auth/fetchAsyncListSingle',
    async (data, thunkAPI) => {
        const respone = await BuyService.list({code : data})
        return respone.data
    }
)


const buySlice = createSlice({
    name : 'Buy',
    initialState : {
        buy : []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncBuy.fulfilled, (state, action) => {
                console.log('action',action)
            })
            .addCase(fetchAsyncListSingle.fulfilled, (state, action) => {
                console.log('action',action)
            })
    }
})


export const { } = buySlice.actions
export default buySlice.reducer


