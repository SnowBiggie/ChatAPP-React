import { useState } from 'react';
import classes from './chatsection.module.css';
import HeaderDetail from './HeaderDetail';
import Main from './Main';
import Message from './Message'
function ChatSection() {

  const [newText, setNewText] = useState("");

  return (
    <div className={classes.main}>
      <HeaderDetail/>
      <Main/>
      <Message send={setNewText}/>
    </div>
  )
}

export default ChatSection