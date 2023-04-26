import { usersReducer} from "./usersSlice";
import { filterReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        users: usersReducer,
        filter: filterReducer,
    },
});

