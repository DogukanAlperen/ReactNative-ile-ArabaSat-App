import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null,
    isLoading: false,
}

export const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {
        setEmail: (state,action) => {
            state.email=action.payload
        },
        setPassword: (state,action) => {
            state.password=action.payload
        },
        setisLoading: (state,action) => {
            state.isLoading=action.payload
        },

    }
})

export const { setEmail,setPassword,setisLoading} = userSlice.actions

export default userSlice.reducer;