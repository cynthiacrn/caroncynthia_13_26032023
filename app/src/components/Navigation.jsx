import {useDispatch, useSelector} from "react-redux";
import ArgentBankLogo from "../assets/images/argentBankLogo.png";
import {Link} from "react-router-dom";
import {logout} from "../store/reducers/auth";

function Navigation() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  function onLogout() {
    dispatch(logout())
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
                <Link className="main-nav-item" to="/user">
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
              <Link to="/sign-in" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            )
        }
      </div>
    </nav>
  )
};

export default Navigation;