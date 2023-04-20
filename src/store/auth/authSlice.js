import { createSlice } from '@reduxjs/toolkit';

const userEmpty = {
    username: '',
    uid: '',
    email: '',
    role: '',
    displayName:''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        authenticated: false,
        user: userEmpty,
        loginMessage: '',
        registerMessage: '',

    },
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload
            state.authenticated = true
        },
        logOut: (state, action) => {
            state.user = userEmpty
            state.authenticated = false
            state.loginMessage = action.payload
            state.registerMessage = ''
        },
        register: (state, action) => {
            state.registerMessage = action.payload
            state.loginMessage = ''
        },
        startLoading: (state, action) => {
            state.isLoading = true
        },
        stopLoading: (state, action) => {
            state.isLoading = false
        }

    }
});
export const { logIn, logOut, register, startLoading, stopLoading } = authSlice.actions;