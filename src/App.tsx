import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './componentes/Home';
import { Cintactotodo } from './Cintactotodo';
import { Proyectos } from './Proyectos';

function App() {
  return (
    <div>
      <BrowserRouter basename="/Hc-portfolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Cintactotodo />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;