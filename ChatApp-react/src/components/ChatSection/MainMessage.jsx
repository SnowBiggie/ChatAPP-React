import { Avatar } from '@mui/material'
import classes from './main.module.css'

function MainMessage({message, time, imgsrc, from}) {
    const styles = from !== 'user' ? {
        message: classes.message,
        messageText: classes['message-text'],
        timestamp: classes.timestamp
    } : {
        message: classes.user,
        timestamp: classes['timestamp-user'],
        messageText: classes['message-text-user']
    }
  return (

    <div className={styles.message}>
        <div className={styles.messageText}>
          <p>{message}</p>
        </div>
        <div className={styles.timestamp}>
          <Avatar alt="profile image" src={imgsrc}/>
          <p>{time}</p>
        </div>
      </div>
  )
}

export default MainMessage