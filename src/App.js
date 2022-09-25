import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'

const App = () => {
  return (
    <div className="app">
        <h1>Skylinked</h1>
        <Header />

        <div className='app_body'>
          <Sidebar />
        </div>
    </div>
  );
}

export default App;