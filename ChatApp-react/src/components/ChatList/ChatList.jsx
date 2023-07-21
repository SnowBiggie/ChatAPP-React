import classes from './chatlist.module.css'
import Hearder from './Hearder'
import Search from '../../UI/Search'
import Chat from './Chat'

function ChatList() {
  return (
    <div className={classes.main}>
      <Hearder/>
      <Search text="Search contacts..."/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
      <Chat/>
    </div>
    
  )
}

export default ChatList