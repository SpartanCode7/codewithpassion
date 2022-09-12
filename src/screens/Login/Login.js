import React from 'react'
import './Login.scss'

function Login() {
  return (
    <div className="login">
        <div className="login__inner">
            <div className="login__box">
                <form>
                    <div className="login__heading">
                        <h2>Login</h2>
                    </div>
                    <input type="text" className="login__input"></input>
                    <input type="password" className="login__input"></input>
                    <input type="submit" className="login__button" value="Login"></input>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
