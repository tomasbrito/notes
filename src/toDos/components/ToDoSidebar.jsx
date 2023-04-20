import { useDispatch } from "react-redux"
import { setActiveToDo } from "../../store/toDos/toDosSlice"
import { useEffect, useMemo } from "react"

export const ToDoSidebar = ({ toDo }) => {
    const dispatch = useDispatch()

    const onToDoClick = () => {
        dispatch(setActiveToDo({ ...toDo, show: true }))
    }

    const shortTitle = useMemo(() => {
        const title = toDo.title
        return title.length > 15 ? `${title.substr(0, 15)}...` : title
    }, [toDo.title])

    const shortBody = useMemo(() => {
        const body = toDo.body
        return body.length > 15 ? `${body.substr(0, 14)}...` : body
    }, [toDo.body])

    return (
        <>
            <div onClick={onToDoClick} className="p-3 border-bottom sideBarItem d-flex align-items-center">
                <i className="bi bi-clipboard-fill"></i>
                <div className="d-flex flex-column mx-2">
                    <h6 className="text-light">{shortTitle}</h6>
                    <h6>{shortBody}</h6>
                </div>

            </div>
        </>
    )
}
