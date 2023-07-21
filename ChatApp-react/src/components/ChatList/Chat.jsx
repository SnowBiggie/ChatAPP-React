import { Avatar } from "@mui/material";
import classes from "./chat.module.css";
function Chat() {
  return (
    <div className={classes.main}>
        <Avatar src="/logo.png" className={classes.avatar} alt="user avatar"/>
        <div className={classes.details}>
        <p className={classes.name}>Karabelo Motaung</p>
        <p>last message</p>
        </div>
        
    </div>
  )
}

export default Chat