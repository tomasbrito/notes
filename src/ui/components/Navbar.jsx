import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut, startLoading, stopLoading } from '../../store/auth';

export const Navbar = () => {

    const { user, authenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const onLoginClick = () => {
        navigate('/auth')
    }

    const onLogoutClick = () => {
        dispatch(logOut())
        localStorage.removeItem('Token')
    }

    return (
        <>
            <nav className="navbar bg-dark  navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{user.displayName}</a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link disabled">{user.username}</a>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            {
                                (authenticated)
                                    ? <button onClick={onLogoutClick} className="btn btn-outline-danger">Exit</button>
                                    : <button onClick={onLoginClick} className="btn btn-outline-success mx-2">Login</button>

                            }
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
