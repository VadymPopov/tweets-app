import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, fetchUsers, updateUser} from "./operations";

const handlePending = state =>{
    state.isLoading = true;
}

const handleRejected = (state, action) =>{
    state.isLoading = false;
    state.error = action.payload;
}

  export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => builder.addCase(fetchUsers.pending,handlePending ).addCase(fetchUsers.fulfilled,(state, action)=>{
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload);
    }).addCase(fetchUsers.rejected, handleRejected).addCase(fetchAllUsers.pending,handlePending ).addCase(fetchAllUsers.fulfilled,(state, action)=>{
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    }).addCase(fetchAllUsers.rejected, handleRejected).addCase(updateUser.pending, handlePending).addCase(updateUser.fulfilled,(state, action) => {
        state.isLoading = false;
        state.error = null;
        
        const index = state.items.findIndex(
            user => user.id === action.payload.id
          );
          state.items.splice(index, 1, action.payload);
    }).addCase(updateUser.rejected, handleRejected)});

    export const usersReducer = usersSlice.reducer;
