import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

import { useContext } from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PANEL</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Panel</span>
          </li>
          <p className="title">LISTAS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Usuarios</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Productos</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Ordenes</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">UTILIDADES</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Estadisticas</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notificationes</span>
          </li>
          <p className="title">SERVICIOS</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Sistema de Salud</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Registros</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Ajustes</span>
          </li>
          <p className="title">USERIO</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Cerrar Sesión</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
        ></div>
        <div
          className="colorOption"
         
        ></div>
      </div>
    </div>
  );
};
export default Sidebar;


