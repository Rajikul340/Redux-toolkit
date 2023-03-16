import { createSlice } from "@reduxjs/toolkit"

const initialState ={
  stock: false,
  brand:[],
  keyword: ""
}

 const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        toggle: (state)=>{
          state.stock = !state.stock
        },
        toggleBrand:(state, action)=>{
          if(!state.brand.includes(action.payload)){
             state.brand.push(action.payload)
          }
          else{
            state.brand =state.brand.filter(brands=>brands !==action.payload)
          }
        }
    }
    
})

export const {toggle, toggleBrand}  =filterSlice.actions
export default filterSlice.reducer;