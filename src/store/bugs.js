import { createSlice } from "@reduxjs/toolkit";

//reducer
let lastId = 0

const slice =createSlice({
    name:'bugs',
    initialState:[],
    reducers:{
        bugAdded:(bugs,action)=>{
            // @ts-ignore
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugRemoved:(bugs,action)=>{
            return bugs.filter(bug => bug.id !== action.payload.id)
        }
    }
})

export const {bugAdded,bugRemoved}=slice.actions
export default slice.reducer