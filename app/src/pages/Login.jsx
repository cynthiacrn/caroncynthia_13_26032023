import ArgentBankLogo from '../assets/images/argentBankLogo.png'

function Login() {
  return (
    <>
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
          <a className="main-nav-item" href="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label
              ><input type="text" id="username"/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label
              ><input type="password" id="password"/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
            >Remember me</label
            >
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  )
}

export default Login;