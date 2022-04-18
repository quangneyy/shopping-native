import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../services/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  persistReducer } from 'redux-persist'

export const fetchAsyncLogin = createAsyncThunk(
    'auth/fetchAsyncLogin',
    async (data, thunkAPI) => {
        const respone = await AuthService.login(data)
        return respone.data
    }
  )

const authSlice = createSlice({
    name : 'Auth',
    initialState : {
        token : [],
        isLogin : false
    },
    reducers : {
        Logout : ( state , action ) => {
            AsyncStorage.removeItem('access_token')
            return {
                ...state,
                token : [],
                isLogin : false
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncLogin.fulfilled, (state, action) => {
                const { access_token } = action.payload
                AsyncStorage.setItem('access_token',access_token)

                return {
                    ...state,
                    token : access_token,
                    isLogin : true
                }
            })
            .addCase(fetchAsyncLogin.rejected, (state, action) => {
                console.log(action.error.message);
            })
    },
})

const persistConfig = {
    key: 'auth',
    storage : AsyncStorage
}

export const { Logout } = authSlice.actions
export default persistReducer(persistConfig,authSlice.reducer)


