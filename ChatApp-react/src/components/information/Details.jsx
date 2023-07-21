import classes from './details.module.css';

function Details({Icon, detail}) {
  return (
    <div className={classes.main}>
        <Icon sx={{ fontSize: 24 }}/>
        <p className={classes.text}>{detail}</p>
    </div>
  )
}

export default Details