import { Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../auth/pages/AuthPage"
import { ToDosPage } from "../toDos/pages/ToDosPage"
import { useSelector } from "react-redux"

export const AppRouter = () => {

    const { authenticated } = useSelector(state => state.auth)

    return (

        <Routes>
             <Route path="/" element={authenticated ? <ToDosPage /> : <AuthPage />} />
        </Routes>
    )
}
