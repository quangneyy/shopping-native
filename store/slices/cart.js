import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchProduct = createAsyncThunk(
//     'product/fetchProduct',
//     async (data, thunkAPI) => {
//         const respone = await ProductService.list(data)
//         return {
//             ...respone,
//             name : data.name,
//             data : respone.data
//         }
//     }
//   )



const CartSlice = createSlice({
    name : 'Cart',
    initialState : {
        cart : []
    },
    reducers : {
        AddCart : ( state , action ) => {
            const { id , sum = 1 , update = false , sumUpdate , total = 0} = action.payload
            let newData = [...state.cart]
            let exist = newData.find(item => item.id === id)
            if ( exist ) {
                newData = newData.map(item => {
                    let sumCurrent = item.sum
                    let totalCurrent = item.total
                    if ( item.id === id) {
                        if( update ) {
                            sumCurrent = sumUpdate
                            totalCurrent = total
                        }else {
                            sumCurrent += sum 
                        }
                    }
                    return {
                        ...item,
                        sum : sumCurrent,
                        total : totalCurrent,
                        product_id : item.id,
                        quantity : sumCurrent
                    }
                })
            }else { 
                newData.push({id,sum,total,product_id : id ,quantity : sum })
            }
            return {
                ...state,
                cart : newData
            }
        },
        RemoveCart : (state , action ) => {
            const { id } = action.payload
            let newData = [...state.cart]
            newData = newData.filter(item => item.id !== id)
            return {
                ...state,
                cart : newData
            }
        },
        RemoveAll : (state , action ) => {
            return {
                ...state,
                cart : []
            }
        }
    },
})

export const { AddCart , RemoveCart , RemoveAll } = CartSlice.actions
export default CartSlice.reducer


