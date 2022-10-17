import './Login.css'

const Login = () => {

  const register = () => {

  }

  const loginToApp = () => {
    
  }

  return <div className='login'>
    <img src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks' alt='Linkedin main logo' />
    <form>
      <input placeholder='Full Name (required if registering)' type='text' />
      <input placeholder='Email' type='text'/>
      <input placeholder='Password' type='password' />
      <button type='submit' onClick={loginToApp}>Sign In</button>
    </form>
    <p>Not A Member?
      <span className='login_register' onClick={register}>Register Now</span>
    </p>
  </div>
}

export default Login