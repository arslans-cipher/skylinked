import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/Event'
import CalenderViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'


import InputOption from './InputOption'

const Feed = () => {
  return <div className='feed'>
    <div className='feed_inputContainer'>
      <div className="feed_input">
        <CreateIcon />
        <form>
          <input className='text' />
          <button type='submit'>Send</button>
        </form>
      </div>
      <div className='feed_inputOptions'>
        <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
        <InputOption Icon={SubscriptionsIcon} title='Photo' color='#E7A33E' />
        <InputOption Icon={EventNoteIcon} title='Photo' color='#C0CBCD' />
        <InputOption Icon={CalenderViewDayIcon} title='Photo' color='#7FC15E' />
      </div>
    </div>
    {/* { Posts} */}
    <Post 
      name='Arslan' 
      description='test' 
      message='the message' 
      photoURL=''
      />
  </div>
}

export default Feed 