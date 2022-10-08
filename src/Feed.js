import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'

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
        <InputOption />
      </div>
    </div>
  </div>
}

export default Feed 