import SearchIcon from '@mui/icons-material/Search';
import classes from './search.module.css'
function Search(props) {
  return (
    <div className={classes.main}>
      <SearchIcon className={classes.icon}/>
      <input placeholder={props.text}  className={classes.input}/>
    </div>
  )
}

export default Search