import { addToDo, setActiveToDo, setToDos, updateToDo } from "./toDosSlice"

export const setToDosTh = () => {
    return async (dispatch) => {
        const response = await fetch('https://notes-back.up.railway.app/private/todosbyid/', {
            headers: {
                'Authorization': localStorage.getItem('Token')
            }
        })
        const data = await response.json();
        const resp = data.data
        dispatch(setToDos(resp))
    }


}

export const saveChanges = (toDo) => {
    return async (dispatch, getState) => {
        try {

            const response = await fetch('https://notes-back.up.railway.app/private/modifyToDo', {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        "userID": getState().auth.user.uid,
                        "docID": toDo.id,
                        "toDo": {
                            "title": toDo.title,
                            "body": toDo.body,
                        }
                    }
                ),
                headers: {
                    'Authorization': localStorage.getItem('Token')
                }

            })
            dispatch(updateToDo(toDo))
        } catch (error) {
            console.log(error)
        }
    }
}

export const startCreateToDo = () => {
    return async (dispatch, getState) => {
        try {

            const response = await fetch('https://notes-back.up.railway.app/private/addToDo', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        "userID": getState().auth.user.uid,
                        "title": '',
                        "body": '',
                    }
                ),
                headers: {
                    'Authorization': localStorage.getItem('Token')
                }

            })
            const data = await response.json()
            const id = data.data.id
            const time = data.data.time
            dispatch(addToDo({
                title: '',
                body: '',
                id,
                active: true,
                time
            }))
            console.log('setto')
            dispatch(setActiveToDo({
                title: '',
                body: '',
                id,
                active: true,
                show: true
            }))
        } catch (error) {
            console.log(error)
        }


    }
}