import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const App = () => {
  const user = useSelector(selectUser)
  return (
    <div className="app">
        <h1>Skylinked</h1>
        <Header />

        <div className='app_body'>
          <Sidebar />
          <Feed />
        {/* Widgets */}
        </div>
    </div>
  );
}

export default App;