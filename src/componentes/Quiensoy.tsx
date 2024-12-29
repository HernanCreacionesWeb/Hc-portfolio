 
import yofoto from "../assets/imagenes/yo-foto.jpeg"
import './quiensoy.css';

export const Quiensoy = () => {
  return (
 
      <div className="card mb-3 px-5  contenedor-gral mx-5"   >
        <div className="row g-0 " > 
          <div className="col-md-4">
            <img src={yofoto} className="img-fluid rounded-circle" style={{ width: "130px" }}  alt="..." />
          </div>
          <div className="col-md-8 ">
            <div className="card-body  ">
              <h3 className="card-title ">Quien soy</h3>
              <p className="card-text parraf ">Hola, soy Hernán un apasionado de la ciencia y tecnología. Con esfuerzo he ido adquiriendo conocimientos y herramientas para poder realizar páginas web, tanto en diseño como en desarrollo.
                Te invito a recorrer el sitio y si te interesa podemos comunicarnos</p>

            </div>
          </div>
        </div>
      </div>



      )
}
