import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className ='header'>
          <div className ='header_left'>
            <img src='' alt='' />
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