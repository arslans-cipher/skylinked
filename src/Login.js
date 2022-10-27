import { useState } from 'react'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')


  const registerHandler = () => {

  }

  const loginHandler = event => {
    event.preventDefault()
  }

  return <div className='login'>
    <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
      alt="Linkedin main logo" />

    <form>
      <input
        placeholder="Full name (required for register)"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Profile pic URL (optional)"
        type="text"
      />

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" onClick={loginHandler}>
        Sign In
      </button>
    </form>

    <p>
      Not a member?{" "}
      <span className="login__register" onClick={registerHandler}>
        Register Now
      </span>
    </p>
  </div>
}

export default Login