import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Login from './Login'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { useEffect } from 'react'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'

const App = () => {
  
  const userState = useSelector(selectUser);
  const { user } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

  return (
    <div className="app">
      <h1>Skylinked</h1>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  )
}

export default App