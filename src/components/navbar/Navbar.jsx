import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <input type="text" placeholder='Buscar...' />
        <SearchIcon />
      </div>
      <div className="items">
        <div className="item">
           <LanguageIcon />
           Inglés
        </div>
        <div className="item">
           <DarkModeIcon />
        </div>
        <div className="item">
           <FullscreenIcon />
        </div>
        <div className="item">
           <NotificationsIcon />
        </div>
        <div className="item">
           <ChatBubbleOutlineIcon />
        </div>
        <div className="item">
           <ListIcon />
        </div>

      </div>
    </div> 
  )
}
export default Navbar
