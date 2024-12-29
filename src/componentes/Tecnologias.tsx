 
import html from "../assets/imagenes/html.svg"
import css from "../assets/imagenes/CSS-Logo.png"
import react from "../assets/imagenes/react.png"
import node from "../assets/imagenes/node.svg"
import xampp from "../assets/imagenes/xampp.svg"
import mysql from "../assets/imagenes/mysql.svg"


import './tecnologias.css';


export const Tecnologias = () => {
  return (
    <div className='cont'>
           <div className="card mb-3   contenedor-gral mt-0"  >
        <div className="row g-0">
          <h3>Tecnologías que uso</h3>
<div className="d-flex gap-2 justify-content-center py-3">

<ul className="d-flex justify-content-between flex-wrap">
<li><img src={html}  className='iconos mx-0' alt="" /></li>
<li><img src={css}  className='icono  mx-0' width="118"  alt="" /></li>
<li><img src={react}  className='  mx-2'  width="65"   alt="" /></li>
<li><svg   className='iconos mx-0'  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
</svg></li>
<li><img src={mysql}  className='  mx-2' width="55"  height="65"    alt="" /></li>
<li><svg   className='iconos mx-2'  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
</svg></li>
<li><img src={node}  className='  mx-2'  width="55"  height="65"  alt="" /></li>
<li><img src={xampp}  className='  mx-2' width="55"  height="65"      alt="" /></li>

<li><svg     className='iconos mx-2'  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#37474f" d="M15,6h18c4.971,0,9,4.029,9,9v18c0,4.971-4.029,9-9,9H15c-4.971,0-9-4.029-9-9V15	C6,10.029,10.029,6,15,6z"></path><path fill="#fff" d="M21,9l-7,7l5.5,5.5c0.828,0.829,0.828,2.171,0,3L28,16L21,9z"></path><polygon fill="#1de9b6" points="29.532,17.5 15,31.983 22.042,39 36.574,24.517"></polygon>
</svg></li>
<li><img    className='  mx-1' width="65"    src="https://img.icons8.com/color-glass/48/audio-wave--v1.png" alt="audio-wave--v1"/></li>

</ul>
</div>
        </div>
      </div>
    </div>
  )
}
