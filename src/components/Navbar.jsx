// components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ setHeaderText }) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* <NavLink to="/" className="navbar-brand" onClick={() => setHeaderText("Manual de Usuario Nequi")}>
          Manual de Nequi
        </NavLink> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active" onClick={() => setHeaderText(
                {
                  titulo:"Inicio",
                  texto: "Configuraciones iniciales"
                })}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/funciones" className="nav-link" activeClassName="active" onClick={() => setHeaderText(
                {
                  titulo:"Funciones",
                  texto: "Funcionalidades nequi"
                }
              )}>
                Funciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/configuracion" className="nav-link" activeClassName="active" onClick={() => setHeaderText(
                {
                  titulo:"Configuracion",
                  texto: "Configuraciones nequi"
                }
              )}>
                Configuración
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/seguridad" className="nav-link" activeClassName="active" onClick={() => setHeaderText(
                {
                  titulo:"Seguridad",
                  texto: "Seguridad Nequi"
                }
              )}>
                Seguridad
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/enviardinero" className="nav-link" activeClassName="active" onClick={() => setHeaderText(
                {
                  titulo:"Enviar Dinero",
                  texto: "En esta sección te enseñamos cómo enviar dinero fácilmente"
                }
              )}>
                Enviar Dinero
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
