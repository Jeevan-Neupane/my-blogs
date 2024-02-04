import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    status: false,
    user: null

}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {



    }
})


export default userSlice.reducer;
export const { } = userSlice.actions;