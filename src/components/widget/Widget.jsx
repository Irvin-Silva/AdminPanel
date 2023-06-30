import "./Widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
          <sapn className="title">USUARIOS</sapn>
          <sapn className="counter">112312</sapn>
          <sapn className="link">see all users</sapn>

        </div>
        <div className="right">
          <div className="percentage positive">
            <ArrowDropUpIcon/>
            20%
            </div>
            <PersonOutlineIcon className="icon"/>

        </div>
    </div>
  )
}
