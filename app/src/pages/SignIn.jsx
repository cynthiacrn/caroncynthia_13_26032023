import { useState } from "react";
import { useDispatch} from "react-redux";
import { client } from "../client";
import { loginFailure, loginStart, loginSuccess } from "../store/reducers/auth";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('tony@stark.com')
  const [password, setPassword] = useState('password123')
  const [remember, setRemember] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    dispatch(loginStart())

    client.login({ email, password })
      .then((token) => {
        dispatch(loginSuccess(token))
        navigate("/user")
      })
      .catch(({ response: { data: { message } } }) => {
        dispatch(loginFailure(message))
      });
  }

  return (
    <>
      <Navigation />

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>

          <h1>Sign In</h1>

          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={email}
                onInput={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onInput={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="input-remember">
              <input
                id="remember-me"
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label htmlFor="remember-me">
                Remember me
              </label>
            </div>

            <button type="submit" onClick={onSubmit} className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default SignIn;