// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Funciones from './pages/Funciones';
import Configuracion from './pages/Configuracion';
import Seguridad from './pages/Seguridad';
import './App.scss';
import Mainbar from './components/MainBar';
import EnviarDinero from './pages/EnviarDinero';
import SacarDinero from './pages/SacarDinero';
import PedirDinero from './pages/PedirDinero';
import RelacionesConfianza from './pages/RelacionesConfianza';
import RecargaNequi from './pages/RecargaNequi';
import Metas from './pages/Metas';




function App() {

  const [headerText, setHeaderText] = useState({
    titulo:"Aprende a usar Nequi",
    texto: "Explora las funciones clave de Nequi para aprovechar al máximo tu cuenta."
  });

  return (
    <Router>
      <div className="App">
        <Mainbar></Mainbar>
        {/* Banner */}
        <div className="banner-container">
          <h1>{headerText.titulo}</h1>
          <p>{headerText.texto}</p>
        </div>
        <Navbar setHeaderText={setHeaderText} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio setHeaderText={setHeaderText}/>} />
            <Route path="/funciones" element={<Funciones />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/seguridad" element={<Seguridad />} />
            <Route path="/metas" element={<Metas />} />
            <Route path="/enviardinero" element={<EnviarDinero />} />
            <Route path="/sacardinero" element={<SacarDinero />} />
            <Route path="/pedirdinero" element={<PedirDinero />} />
            <Route path="/relacionesconfianza" element={<RelacionesConfianza />} />
            <Route path="/recarganequi" element={<RecargaNequi />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
