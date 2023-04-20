import { useDispatch, useSelector } from "react-redux"
import { startRegisterWithEmail, startRegisterWithGoogle } from "../../store/auth/thunks"
import { useForm } from "../../hooks/useForm"
import { useEffect, useState } from "react"

export const Register = () => {
  const { registerMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const initialForm = {
    email: '',
    password: '',
    displayName: ''
  }
  const [userData, setUserData] = useState(initialForm)

  const inputChange = (event) => {
    const name = event.target.name
    setUserData({
      ...userData,
      [name]: event.target.value
    })
  }

  const onRegisterClick = (event) => {
    const form = document.getElementById('form1')
    if (!form.checkValidity()) {
      return
    } else {
      event.preventDefault()
    }
    dispatch(startRegisterWithEmail(userData))
  }


  useEffect(() => {
    (() => {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

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
    <div className="col-5 shadow register rounded justify-content-center px-5 pb-5 pt-3" >
      <form className="needs-validation" id="form1" noValidate>
        <h2 className="display-6 pb-3 text-dark">Register</h2>
        <div className=" ">
          <input type="text" required placeholder="Name" name='displayName' id="validationCustom01" value={userData.displayName} onChange={inputChange} className="form-control mb-3" />
          <input type="email" required placeholder="Email" name="email" value={userData.email} onChange={inputChange} className="form-control mb-3" />
        </div>
        <div className="mb-3">
          <input type="password" minLength={6} required placeholder="Password" name="password" value={userData.password} onChange={inputChange} className="form-control" />
        </div>

      </form>

      <button
        className="btn btn-primary col-12  my-2"
        type="submit"
        form="form1"
        onClick={onRegisterClick}>
        Register
      </button>

      {(registerMessage) ?
        <div className="alert alert-info" role="alert">{registerMessage}</div>
        : <></>}
    </div>
  )
}
