import { Avatar } from '@mui/material'
import classes from './information.module.css';
import Details from './Details';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


function Information() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Avatar alt='profile image' src='/logo.png' sx={{ width: 200, height: 200 }}/>
        {/* <EditIcon/> */}

      
      <h2 className={classes.name}>Karabelo Motaung</h2>
      </div>
      <div className={classes.details}>
          <Details Icon={LocationOnOutlinedIcon}  detail='Bloemfontein'/>
          <Details Icon={ContactPhoneOutlinedIcon} detail='065-893-7969'/>
          <Details Icon={EmailOutlinedIcon} detail='karabelomotaung@gmail.com'/>
      </div>

      
    </div>
  )
}

export default Information