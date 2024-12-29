 
import "./Proyectogaleria.css"
import camping from "./assets/imagenes/1camping.png"
import landing from "./assets/imagenes/2landing.png"
 
import biblioteca from "./assets/imagenes/4biblioteca.png"
import blog from "./assets/imagenes/5blog.png"
import superm from "./assets/imagenes/6supermercado.png"
import web from "./assets/imagenes/7web.png"
 
import laesquinita from "./assets/imagenes/9laesquinita.png"
import vineria from "./assets/imagenes/10winery.png"
import disponible from "./assets/imagenes/disponible.png"
import { NavLink } from 'react-router-dom'







export const Proyectogaleria = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <img src={camping} className="card-img-top custom-img" alt="Camping" />
                        <div className="card-body custom-body">
                            <a href="https://epsilon1441.github.io/HCW-Dinamicpage.github.io/" className="btn btn-primary">Camping</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <img src={landing} className="card-img-top custom-img" alt="Landing" />
                        <div className="card-body custom-body">
                            <a href="https://hernancreacionesweb.github.io/HCcreacionesweb-React.github.io/" className="btn btn-primary">Landing</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <img src={biblioteca} className="card-img-top custom-img" alt="Biblioteca" />
                        <div className="card-body custom-body">
                            <a href="https://epsilon1441.github.io/Epsilon1441biblio.github.io/" className="btn btn-primary">Biblioteca</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <img src={superm} className="card-img-top custom-img" alt="Supermercado" />
                        <div className="card-body custom-body">
                            <a href="https://epsilon1441.github.io/HCWebSupermercado.github.oi/" className="btn btn-primary">Supermercado</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <img src={web} className="card-img-top custom-img" alt="Web" />
                        <div className="card-body custom-body">
                            <a href="https://epsilon1441.github.io/ACWebDesign.github.io/" className="btn btn-primary">Web</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <img src={laesquinita} className="card-img-top custom-img" alt="La Esquinita" />
                        <div className="card-body custom-body">
                            <a href="https://hernancreacionesweb.github.io/Tiendabarrial-HCWeb.github.io/" className="btn btn-primary">La Esquinita</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card mx-2">
                        <img src={blog} className="card-img-top custom-img" alt="Blog" />
                        <div className="card-body custom-body">
                            <a href="https://epsilon1441.github.io/astropolimatablog.github.io/" className="btn btn-primary">Blog</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card custom-card">
                        <img src={vineria} className="card-img-top custom-img" alt="Vineria" />
                        <div className="card-body custom-body">
                            <a href="https://epsilon1441.github.io/Winery-store.github.io/" className="btn btn-primary">Vineria</a>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card disponible-card">
                        <img src={disponible} className="card-img-top custom-img" alt="Vineria" />
                        <div className="card-body custom-body">
                           
                 <NavLink to="/contacto"> <a href="#" className="btn btn-primary">Contacto</a></NavLink>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>

    )
}
