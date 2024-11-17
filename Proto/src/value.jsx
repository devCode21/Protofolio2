import {createSlice} from '@reduxjs/toolkit'

const initialState={
     Category:"All"
}

export  const Value=createSlice({
     name:'val',
     initialState,
     reducers:{
        ChangeValue:(state,action)=>{
            state.Category=action.payload
        }
     }
})

export const{ChangeValue}=Value.actions
export default Value.reducer