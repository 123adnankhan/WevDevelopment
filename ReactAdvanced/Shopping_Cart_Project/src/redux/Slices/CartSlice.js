import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
            // action.payload show input parameter in add function
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            
            // is state me wahi item ki filtering karna jiski id action.payload ki id ke equal nahi hai 
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;