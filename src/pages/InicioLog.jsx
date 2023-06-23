import { Tematicas } from '../components/Tematicas.jsx';
import './inicio.css';
import compartir from '../assets/icon-compartir.svg';
import {ModalError} from '../components/ModalError.jsx';

export function InicioLog() {
  return (
    <>
      <ModalError></ModalError>
      <div className='btn_compartir'>
        <img className='compartir' src={compartir} alt="Compartir" border="0" />
         <a href="#" className='linkto'>
        Con amigos es mas divertido!!
     </a>
      </div>
    
      <h1 className='title'>ELIGE TU TEMA</h1>
      <Tematicas></Tematicas>
    </>
  );
}
