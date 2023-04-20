import { logIn, logOut, register, startLoading, stopLoading } from "./authSlice"

export const startLogin = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(startLoading())
        try {
            const resp = await fetch('https://notes-back.up.railway.app/public/login', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        email, password
                    }
                )
            })
            const data = await resp.json()
            localStorage.setItem('Token', data.data.token)
            if (data.status === 'Error') {
                dispatch(stopLoading())
                return dispatch(logOut(data.errors))
            }
            dispatch(logIn({ email, password, uid: data.data.uid, displayName: data.data.displayName }))
            dispatch(stopLoading())
        } catch (error) {
            console.log(error)
            dispatch(stopLoading())
        }
    }
}

export const startRegisterWithEmail = ({ email, password, displayName }) => {
    return async (dispatch) => {
        try {
            const resp = await fetch('https://notes-back.up.railway.app/public/register', {
                method: 'POST',
                body: JSON.stringify(
                    {
                        email, password, displayName
                    }
                )
            })
            const data = await resp.json()
            console.log(data)
            if (data.status === 'Error') return dispatch(register(data.errors))
            dispatch(register(data.message))
        } catch (error) {
            console.log(error)
        }

    }
}

export const startRegisterWithGoogle = () => {
    return async (dispatch) => {
        try {
            const resp = await fetch('https://notes-back.up.railway.app/public/registerWithGoogle', {
                method: 'POST',
            })
            const data = await resp.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}