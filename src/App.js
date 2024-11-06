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

function App() {

  const [headerText, setHeaderText] = useState({
    titulo:"Aprende a usar Nequi",
    texto: "Te deamos la bienvenida a nequi. Aquí aprenderás a usarlo"
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
            <Route path="/" element={<Inicio />} />
            <Route path="/funciones" element={<Funciones />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/seguridad" element={<Seguridad />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
