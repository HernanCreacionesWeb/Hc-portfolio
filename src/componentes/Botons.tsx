 
 import { NavLink } from 'react-router-dom'
 import './botons.css';

export const Botons = () => {
  return (
    <div>
    <div className="botones-container">
      <NavLink to="/proyectos">
    <button className="btn btn-info rounded-pill px-4 ">Proyectos </button>
    </NavLink>
     <NavLink to="/contacto"> 
    <button className="btn btn-info btn btn-warning rounded-pill px-4">Contacto</button>
    </NavLink>
  </div>
  </div>
  )
}
