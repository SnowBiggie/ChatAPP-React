import MainMessage from './MainMessage'
import classes from './main.module.css'

function main() {
  return (
    <div className={classes.main}>
      <MainMessage message="hello karabelo, dont forget tommorow you have a lecture" time='12:00AM' imgsrc='/logo.png' from='user'/>
      <MainMessage message="hello karabelo, you have to learn vue js" time='12:00AM' imgsrc='/logo.png' from='guest'/>
      <MainMessage message="hello karabelo" time='12:00AM' imgsrc='/logo.png' from='guest'/>
      <MainMessage message="hello Tim, dont forget tommorow you have a lecture" time='12:00AM' imgsrc='/logo.png' from='user'/>
      <MainMessage message="hello Tim, dont forget tommorow you have a lecture" time='12:00AM' imgsrc='/logo.png' from='user'/>
      <MainMessage message="hello karabelo, you have to learn vue js" time='12:00AM' imgsrc='/logo.png' from='guest'/>
      <MainMessage message="hello karabelo" time='12:00AM' imgsrc='/logo.png' from='guest'/>
      
    </div>
  )
}

export default main