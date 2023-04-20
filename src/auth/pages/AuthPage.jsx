import { useDispatch, useSelector } from 'react-redux';
import { Login, Register } from '../components'
import { logIn, logOut } from '../../store/auth'
import { Loader } from '../../toDos/pages/Loader';
import 'animate.css';
export const AuthPage = () => {

  const { isLoading } = useSelector(state => state.auth)

  if (isLoading) {
    return <Loader></Loader>
  }

  return (
    <>
      <div className='container d-flex vh-100 align-items-center animate__animated animate__fadeIn'>
        <div className='row w-100  text-center justify-content-center'>
          <Login />
          <Register />
        </div>
      </div>
    </>
  )
}
