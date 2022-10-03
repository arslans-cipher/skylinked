import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'

const App = () => {
  return (
    <div className="app">
        <h1>Skylinked</h1>
        <Header />

        {/* App Body */}
        <div className='app_body'>
          <Sidebar />
        {/* Feed */}
        {/* Widgets */}
        </div>
    </div>
  );
}

export default App;