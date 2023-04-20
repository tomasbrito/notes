import { createSlice } from '@reduxjs/toolkit';
export const toDosSlice = createSlice({
    name: 'toDos',
    initialState: {
        toDos: [],
        activeToDo: {
            body: 'a',
            title: '',
            active: true,
            time: '',
            id: '',
            show: false
        }
    },
    reducers: {
        setToDos: (state, action) => {
            state.toDos = action.payload
        },
        addToDo: (state, action) => {
            state.toDos = [...state.toDos, action.payload]
        },
        setActiveToDo: (state, action) => {
            state.activeToDo = action.payload
        },
        updateToDo: (state, action) => {
            console.log(action.payload.id)
            state.toDos = state.toDos.map(toDo => {
                console.log(toDo.id)
                if (toDo.id === action.payload.id) {
                    return action.payload
                }
                return toDo
            })
        }
    }
});
export const { addToDo, setToDos, setActiveToDo, updateToDo } = toDosSlice.actions;