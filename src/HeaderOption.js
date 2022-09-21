import './HeaderOption.css'

const HeaderOption = ({ Icon, title }) => {
  return  <div className='headerOption'>
    { Icon && <Icon className='headerOption_Icon' /> }
    <h5 className='headerOption_title'>{ title }</h5>
  </div>
}

export default HeaderOption