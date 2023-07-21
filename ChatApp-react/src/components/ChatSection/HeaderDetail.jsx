import classes from './headerdetail.module.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

function HeaderDetail() {
  return (
    <div className={classes.main}>
        <div className={classes.detail}>
            <FiberManualRecordIcon className={classes.dot}/>
            <h2>Karabelo Motaung</h2>
        </div>
        <div className={classes.icons}>
            <CallOutlinedIcon className={classes.icon}/>
            <VideocamOutlinedIcon className={classes.icon}/>
        </div>
    </div>
  )
}

export default HeaderDetail