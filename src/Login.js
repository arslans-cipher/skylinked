import './Login.css'

const Login = () => {
  return <div className='login'>
    <img src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks' alt='Linkedin main logo' />
    <form>
      <input placeholder='Full Name (required if registering)' type='text' />
      <input placeholder='Email' type='text'/>
      <input placeholder='Password' type='password' />
      <button>Sign In</button>
    </form>
  </div>
}

export default Login