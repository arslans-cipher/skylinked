import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

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

          </div> 
    </div>
  )
}

export default Header