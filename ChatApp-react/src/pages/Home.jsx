import ChatList from "../components/ChatList/ChatList";
import ChatSection from "../components/ChatSection/ChatSection";
import Information from '../components/information/Information';
import classes from './home.module.css'

function Home() {
  return (
    <div className={classes}>
      <ChatList/>
      <ChatSection/>
      <Information/>
    </div>
  )
}

export default Home