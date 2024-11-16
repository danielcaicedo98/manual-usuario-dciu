// pages/Inicio.js
import React from 'react';
import { Link } from 'react-router-dom';

function Inicio({ setHeaderText }) {
  return (
    <div className="container my-5">
      <h1 className="mb-4">¡Bienvenido al Manual de Nequi!i</h1>
      <p className="lead text-justify">
        Aquí encontrarás toda la información que necesitas para sacar el máximo provecho de tu cuenta Nequi y realizar tus transacciones de forma fácil y segura. Ya sea que estés empezando o quieras conocer nuevas funciones, este manual te guiará paso a paso.
      </p>
      <hr />
      <p>
        A continuación, tenemos las siguientes opciones para ayudarte a familiarizarte con la app:
      </p>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <Link to="/enviardinero" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}
        onClick={() => setHeaderText(
                {
                  titulo:"Enviar Dinero",
                  texto: "En esta sección te enseñamos cómo enviar dinero fácilmente"
                }
              )}>
          ¿Cómo enviar dinero?
        </Link>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <a href="/sacardinero" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
        ¿Cómo sacar dinero?
        </a>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <a href="/relacionesconfianza" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
          Relaciones de confianza
        </a>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <a href="/relacionesconfianza" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
          Opcion 4
        </a>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <a href="/relacionesconfianza" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
          Opcion 5
        </a>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <a href="/relacionesconfianza" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}>
          Opcion 6
        </a>
      </li>
    </div>
  );
}

export default Inicio;
