import "./Featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Ingresos Totales</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
          <div className="featureChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
          </div>
        
          <p className="title">Total de ventas hasta hoy</p>
          <p className="amount">$420</p>
          <p className="desc">Procesamiento de transacciones anteriores. Es posible que no se incluyan los últimos pagos</p>
        </div>
    </div>

  )
}

export default Featured
