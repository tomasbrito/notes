import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navbar } from "../../ui/components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { ToDoActive } from "../components/ToDoActive"
import { setToDosTh, startCreateToDo } from "../../store/toDos/thunks"
import { addToDo, setActiveToDo } from "../../store/toDos/toDosSlice"
import { NoActiveToDo } from "../components/NoActiveToDo"
import 'animate.css';

export const ToDosPage = () => {

  const dispatch = useDispatch()
  const { activeToDo } = useSelector(state => state.toDos)

  useEffect(() => {
    dispatch(setToDosTh())
  }, [])

  const onAddClick = () => {
    dispatch(startCreateToDo())
  }

  return (
    <>
      <Navbar />

      <div className="container-fluid animate__animated animate__fadeIn">
        <button onClick={onAddClick} className="btn btn-primary shadow addButton"><i className="bi bi-plus-circle h2"></i></button>
        <div className="row vh-100">
          <div className="col-2 p-0 sidebar">
            <Sidebar />
          </div>
          <div className="col-10 bg-dark text-light">
            {
              (activeToDo.show) ? <ToDoActive />
                : <NoActiveToDo />
            }

          </div>
        </div>

      </div>
    </>
  )
}
