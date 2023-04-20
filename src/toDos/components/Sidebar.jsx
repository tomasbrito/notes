import { useEffect } from "react"
import { useSelector } from "react-redux"
import { ToDoSidebar } from "./ToDoSidebar"

export const Sidebar = () => {

    const { toDos } = useSelector(state => state.toDos)

    return (
        <>
            {

                toDos.map(toDo => (
                    <ToDoSidebar key={toDo.id} toDo={toDo} />
                ))
            }
        </>
    )
}
