import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  persistReducer } from 'redux-persist'

const favoriteSlice = createSlice({
    name : 'Favorite',
    initialState : {
        items : [],
    },
    reducers : {
        Favorite : (state , action) => {
            const { id } = action.payload
            let newData
            const item = state.items.find(item => item === id);
            if(item){
                newData = state.items.filter(item => item !== id)
            }else{
                newData = [...new Set([id,...state.items])]
            }
            return {
                ...state,
                items : newData
            }
        },
        RemoveFavorite : (state , action ) => {
            return {
                ...state,
                items : []
            }
        }
    },
    
})

const persistConfig = {
    key: 'favorite',
    storage : AsyncStorage
}

export const { Favorite , RemoveFavorite } = favoriteSlice.actions
export default persistReducer(persistConfig,favoriteSlice.reducer)


