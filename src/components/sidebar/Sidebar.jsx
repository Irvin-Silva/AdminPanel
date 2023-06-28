import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <sapan className="logo">Admin</sapan>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <li>
                    <DashboardIcon></DashboardIcon>
                    <span>Panel</span>
                </li>
                <li>
                    <span>Usuarios</span>
                </li>
                <li>
                    <span>Productos</span>
                </li>
                <li>
                    <span>Ordenes</span>
                </li>
                <li>
                    <span>Delivery</span>
                </li>
                <li>
                    <span>Estadisticas</span>
                </li>
                <li>
                    <span>Notificaciones</span>
                </li>
                <li>
                    <span>Sistema de Salud</span>
                </li>
                <li>
                    <span>Registros</span>
                </li>
                <li>
                    <span>Ajustes</span>
                </li>
                <li>
                    <span>Perfil</span>
                </li>
                <li>
                    <span>Ajustes</span>
                </li>
                <li>
                    <span>Cerrar Sesión</span>
                </li>
            </ul>

        </div>
        <div className='bottom'>Color options</div>
 

 

    </div>
  )
  
}
export default Sidebar
