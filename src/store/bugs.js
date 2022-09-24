import { createSlice } from "@reduxjs/toolkit";
import{createSelector} from"reselect";
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
        },
        // @ts-ignore
        bugResolved:(bugs,action)=>{
            // @ts-ignore
            return bugs.map(bug => bug.id !== action.payload.id ? bug : {...bugs,resolved:true})
        },
        // @ts-ignore
        bugAssignedToUser:(bugs,action)=>{
            const {bugId, userId}=action.payload
            // @ts-ignore
            const index = bugs.findIndex(bug=>bug.id===bugId)
            // @ts-ignore
            bugs[index].userId = userId
        }
    }
})

export const {bugAdded,bugRemoved,bugResolved,bugAssignedToUser}=slice.actions
export default slice.reducer
//Selector

export const getUnresolvedBugs = createSelector(
    
    // @ts-ignore
    state => state.entities.bugs,
    // @ts-ignore
    bugs => bugs.filter(bug=>!bug.resolved)
)
export const getBugsByUser = userId => createSelector(
    // @ts-ignore
    state => state.entities.bugs,
    // @ts-ignore
    bugs => bugs.filter(bug=>bug.userId===userId)
)