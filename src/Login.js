import './Login.css'

const Login = () => {

  const registerHandler = () => {

  }

  const loginHandler = () => {
    
  }

  return <div className='login'>
    <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
      alt="Linkedin main logo" />

    <form>
      <input
        placeholder="Full name (required for register)"
        type="text"
      />

      <input
        placeholder="Profile pic URL (optional)"
        type="text"
      />

      <input
        placeholder="Email"
        type="email"
      />
      <input
        placeholder="Password"
        type="password"
      />

      <button type="submit" onClick={loginHandler}>Sign In</button>
    </form>

    <p>
      Not a member?
      <span className="login_register" onClick={registerHandler} >Register Now</span>
    </p>

  </div>
}

export default Login