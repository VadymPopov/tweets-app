// import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = state => state.users.items;

export const selectAllUsers = state => state.users.allUsers;

export const selectIsLoading = state => state.users.isLoading;

export const selectError = state => state.users.error;

export const selectFilter = state => state.filter.value;



// export const selectVisibleUsers = createSelector([selectFilter, selectUsers], (filter, users)=> {
//     if(filter === 'follow'){
//         return users.filter(user => user.followed === false)
//       } if(filter === 'following'){
//         return users.filter(user => user.followed === true)
//       } else {
//         return users;
//       }
// });