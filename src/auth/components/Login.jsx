import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { logIn } from "../../store/auth"
import { startLogin } from "../../store/auth/thunks"
import { useForm } from "../../hooks/useForm"

export const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loginMessage } = useSelector(state => state.auth)

  const [data, setData] = useState({ email: '', password: '' })

  const onDataChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }


  const onLoginClick = (event) => {
    const form = document.getElementById('form2')
    if (!form.checkValidity()) {
      return
    } else {
      event.preventDefault()
    }
    dispatch(startLogin(data))

  }

  useEffect(() => {
    (() => {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation2')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
    })()
  }, [])


  return (
    <div className="col-5 shadow login rounded justify-content-center px-5 pb-5 pt-3 " >
      <form className="needs-validation2" id="form2" noValidate>
        <h2 className="display-6 pb-3 text-light">Login</h2>
        <div className="mb-3 ">
          <input type="email" required placeholder="Email" name="email" onChange={onDataChange} className="form-control" />
        </div>
        <div className="mb-3">
          <input type="text" required placeholder="Password" name="password" onChange={onDataChange} className="form-control" />
        </div>
      </form>

      <button
        onClick={onLoginClick}
        className="btn btn-primary col-12  my-2"
        form="form2"
        type="submit"
      >
        Log in
      </button>


      {(loginMessage) ? <div className="alert alert-danger" role="alert">
        {loginMessage.code}
      </div>
        : <></>}
    </div>
  )
}
