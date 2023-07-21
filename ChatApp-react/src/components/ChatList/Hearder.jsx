import classes from './hearder.module.css'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Hearder() {
  return (
    <header className={classes.main}>
        <AddIcon className={`${classes.icons} ${classes['add-icon']}`}/>
        <MoreVertIcon className={classes.icons}/>
      </header>
  )
}

export default Hearder