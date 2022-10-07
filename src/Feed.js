import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'

const Feed = () => {
  return <div className='feed'>
    <div className='feed_inputContainer'>
      <CreateIcon />
      <form>
        <input className='text' />
          <button type='submit'>Send</button>
      </form>
      <div className="feed_input"></div>
    </div>
  </div>
}

export default Feed 