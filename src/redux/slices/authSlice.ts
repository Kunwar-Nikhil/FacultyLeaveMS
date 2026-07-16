import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface User{
    _id: string;
    fullName: string;
    email: string;
    phoneNo: string;
    age: number;
    gender: string;
    department: string;
    subjects: string[];
    photoUrl: string;
    role: "faculty" | "hod" | "dean";
}

interface AuthState{
    user: User | null;
    token: string | null;
    isLoggedIn: boolean;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    isLoggedIn: false,
    loading: false,
    error: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        loginStart(state){
            state.loading = true;
            state.error = null;
        },
        loginSuccess(
            state, action:PayloadAction<{user: User; token: string;}>){
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.error = null;
            },

        loginFailure(state, action:PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        },

        logout(state){
            state.user = null;
            state.token =  null;
            state.isLoggedIn = false;
            state.error = null;
            state.loading = false;
        }
        
    },
});

export const {loginStart,loginSuccess,loginFailure,logout}= authSlice.actions;

export default authSlice.reducer