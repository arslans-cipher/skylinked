import { Avatar } from '@mui/material'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar_top">
        <img src='' alt='' />
        <Avatar />
        <h2>Arslan Ali</h2>
        <h4>Arslan@gmail.com</h4>
      </div>
    </div>
  )
}

export default Sidebar