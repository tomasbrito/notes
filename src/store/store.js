import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { toDosSlice } from './toDos/toDosSlice'

export const store = configureStore({
    reducer:{
        auth : authSlice.reducer,
        toDos: toDosSlice.reducer
    }
})