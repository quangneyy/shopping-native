import { createSlice } from '@reduxjs/toolkit'


const fillterSlice = createSlice({
    name : 'Fillter',
    initialState : {
        items : {
            active : 'Mới nhất',
            fromValue : 0,
            toValue : 50000000
        },
    },
    reducers : {
        Fillter : ( state , action ) => {
            const {active,fromValue,toValue} = action.payload
            return {
                ...state,
                items : {
                    ...state.items,
                    active,
                    fromValue,
                    toValue
                }
            }
        }
    }
})

export const { Fillter } = fillterSlice.actions
export default fillterSlice.reducer


