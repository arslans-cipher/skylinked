import { Avatar } from '@material-ui/core'
import './Sidebar.css'

const Sidebar = () => {

  const recentItem = topic => {
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  }

  return (
    <div className='sidebar'>

      <div className="sidebar_top">
        <img src='https://images.alphacoders.com/203/203543.jpg' alt='' />
        <Avatar className='sidebar_avatar' />
        <h2>Arslan Ali</h2>
        <h4>arslan@gmail.com</h4>
      </div>

      <div className="sidebar_stats">

        <div className="sidebar_stat">
          <p>Who Viewed You</p>
          <p className='sidebar_statNumber'>999</p>
        </div>

        <div className="sidebar_stat">
          <p>Views On Post</p>
          <p className='sidebar_statNumber'>666</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>

    </div>
  )
}

export default Sidebar