import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import './Post.css'

const Post = ({ name, description, message, photoURL }) => {
  return <div className='post'>
    <div className="post_header">
      <Avatar />
      <div className="post_info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>

    <div className="post_body">
      <p>{message}</p>
    </div>

    <div className="post_buttons">
      <InputOption Icon={ThumbUpOffAltIcon} title='Like' color='gray'/>
      <InputOption Icon={ChatIcon} title='Comment' color='gray'/>
      <InputOption Icon={ShareIcon} title='Share' color='gray'/>
      <InputOption Icon={SendIcon} title='Send' color='gray'/>
    </div>
  </div>
}

export default Post