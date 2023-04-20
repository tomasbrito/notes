import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { saveChanges } from "../../store/toDos/thunks"
import { setActiveToDo } from "../../store/toDos/toDosSlice"
import Swal from 'sweetalert2'
export const ToDoActive = () => {

    const { activeToDo } = useSelector(state => state.toDos)
    const { body, title, onInputChange, formState } = useForm(activeToDo)
    const [date, setDate] = useState('')
    const dispatch = useDispatch()

    const onSaveClick = () => {
        Swal.fire({
            title: 'Saved!',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
        dispatch(saveChanges(formState))
    }

    useEffect(() => {
        dispatch(setActiveToDo(formState))
    }, [formState])

    useEffect(() => {
        if (activeToDo.time) {
            const date = new Date(activeToDo.time.seconds * 1000); // Multiplicamos por 1000 para convertir los segundos a milisegundos
            const day = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const year = date.getFullYear().toString();
            setDate(`${day}/${month}/${year}`);
        }
    }, [activeToDo.time]);

    return (
        < >
            <div className="d-flex justify-content-between mt-2 ">
                <h2>{date}</h2>
                <button className="btn btn-outline-primary text-light" onClick={onSaveClick}>Save</button>
            </div>
            <div className="input-group mb-3 py-3">
                <input type="text" className="form-control" name="title" value={title} onChange={onInputChange} placeholder='Title' aria-describedby="basic-addon1" />
            </div>

            <div className="input-group">
                <textarea className="form-control" name="body" value={body} onChange={onInputChange} placeholder={'Body'} aria-label="With textarea"></textarea>
            </div>
        </>
    )
}
