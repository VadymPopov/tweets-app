import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL ="https://6447180f7bb84f5a3e382cc9.mockapi.io";

export const fetchAllUsers = createAsyncThunk("users/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/users?page=1&limit=4");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const updateUser = createAsyncThunk("users/updateUser", async ({followersNum, id, isFollowed}, thunkAPI) => {
    try {
        const response = await axios.put(`/users/${id}`, {followers:followersNum, isFollowed: isFollowed});
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page=1, thunkAPI) => {
    try {
        const response = await axios.get(`/users?page=${page}&limit=4`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
