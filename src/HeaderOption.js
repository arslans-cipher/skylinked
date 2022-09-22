import './HeaderOption.css'
import { Avatar } from '@mui/core'

const HeaderOption = ({ avatar, Icon, title }) => {
  return  <div className='headerOption'>
    { Icon && <Icon className='headerOption_Icon' /> }
    { avatar && <Avatar className='headerOption_Icon' src={avatar} /> }
    <h5 className='headerOption_title'>{ title }</h5>
  </div>
}

export default HeaderOption