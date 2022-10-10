import { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/Event'
import CalenderViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'
import InputOption from './InputOption'
import { db } from './firebase'
import firebase from './firebase'

const Feed = () => {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(
        snapshot.doc.map((doc) => ({
          id: doc.id,
          doc: doc.data()
        }))
      )
    })
  }, [])

  const sendPost = event => {
    event.preventdefault()
    db.collection('posts').add({
      name: 'this is my name',
      description: 'this is a test',
      message: input,
      photoURL: '',
      timestamp: firebase.firestore.FieldValue.serverTimeStamp()
    })
  }

  return <div className='feed'>
    <div className='feed_inputContainer'>
      <div className="feed_input">
        <CreateIcon />
        <form>
          <input value={input} onChange={event => setInput(event.target.value)} type='text' />
          <button onClick={sendPost} type='submit'>Send</button>
        </form>
      </div>
      <div className='feed_inputOptions'>
        <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
        <InputOption Icon={SubscriptionsIcon} title='Photo' color='#E7A33E' />
        <InputOption Icon={EventNoteIcon} title='Photo' color='#C0CBCD' />
        <InputOption Icon={CalenderViewDayIcon} title='Photo' color='#7FC15E' />
      </div>
    </div>
    {posts.map(({ id, data: { name, description, message, photoURL } }) => (
      <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoURL={photoURL}
      />))}
  </div>
}

export default Feed 