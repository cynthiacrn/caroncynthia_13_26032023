import { useSelector } from "react-redux";
import ArgentBankLogo from "../assets/images/argentBankLogo.png";

function Navigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

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
                <a className="main-nav-item" href="/user">
                  <i className="fa fa-user-circle"></i>
                  Tony
                </a>
                <a className="main-nav-item" href="/">
                  <i className="fa fa-sign-out"></i>
                  Sign Out
                </a>
              </>
            )
            : (
              <a className="main-nav-item" href="/sign-in">
                <i className="fa fa-user-circle"></i>
                Sign In
              </a>
            )
        }
      </div>
    </nav>
  )
};

export default Navigation;