import { Avatar } from '@mui/material'
import './Post.css'

const Post = ( {name, description, message, photoURL} ) => {
  return <div className='post'>
    <Avatar />
  <div className="post_info">
    <h2>Name</h2>
    <p>Description</p>
  </div>
  <div className="post_body">
    <p>Message Goes Here</p>
  </div>
</div>
}

export default Post