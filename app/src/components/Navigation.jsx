import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/reducers/auth"
import ArgentBankLogo from "../assets/images/argentBankLogo.png"

function Navigation() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  function onLogout() {
    dispatch(logout())
    navigate('/')
  }

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {
          isAuthenticated
            ? (
              <>
                <Link className="main-nav-item" to="/profile">
                  <i className="fa fa-user-circle"></i>
                  Tony
                </Link>
                <button onClick={onLogout} className="main-nav-item">
                  <i className="fa fa-sign-out"></i>
                  Sign Out
                </button>
              </>
            )
            : (
              <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            )
        }
      </div>
    </nav>
  )
}

export default Navigation