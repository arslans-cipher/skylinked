import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Home'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HeaderOption from './HeaderOption';

const Header = () => {
  return (
    <div className ='header'>
          <div className ='header_left'>
            <img src='https://img.icons8.com/ios/344/skyrim.png' alt='' />
          </div> 

          <div className ='header_search'>
            <SearchIcon />
            <input type='text' />
          </div> 

          <div className ='header_right'>
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='Home'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>


          </div> 
    </div>
  )
}

export default Header