import classes from './message.module.css';
import { useState } from 'react';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import { Backdrop } from '@mui/material';

function Message({send}) {
  const [open, setOpen] = useState(false);
  const [text , setText] = useState('')

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  

  const handleEmojiClick = (event) => {
    const emoji = event.emoji;
    setText((prevText) => prevText + emoji);
  };

  const textSumitHandler =(e)=>{
    e.preventDefault();
    alert(text);
  }



  return (
    <form className={classes.main} onSubmit={textSumitHandler}>
      <div>
      <textarea wrap="soft" className={classes.input} placeholder='type your message here' value={text} required
      onChange={(event) => setText(event.target.value)}/>
      </div>
      <div className={classes.icons}> 

      <Backdrop open={open} onClick={handleClose} >
          <EmojiPicker  className={classes.emoji} onEmojiClick={handleEmojiClick} />
      </Backdrop>
        
          
          <EmojiEmotionsOutlinedIcon className={classes.icon} onClick={handleOpen}/>
          <AttachFileOutlinedIcon className={classes.icon}/>
          <button type='submit' className={classes.button} >
          <SendIcon className={`${classes.icon} ${classes.send}`}/>
          </button>
          
      </div>
    </form>
  )
}

export default Message