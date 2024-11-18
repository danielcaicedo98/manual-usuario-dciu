// pages/Inicio.js
import React from 'react';
import { Link } from 'react-router-dom';

function Inicio({ setHeaderText }) {
  return (
    <div className="container my-5">
      <h1 className="mb-4">¡Bienvenido al Manual de Nequi!</h1>
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
              titulo: "Enviar Dinero",
              texto: "En esta sección te enseñamos cómo enviar dinero fácilmente"
            }
          )}>
          ¿Cómo enviar dinero?
        </Link>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <Link to="/sacardinero" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }} onClick={() => setHeaderText(
          {
            titulo: "Cómo Retirar Dinero en Nequi",
            texto: "En esta sección te enseñamos cómo sacar dinero fácilmente"
          }
        )}>
          ¿Cómo sacar dinero?
        </Link>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <Link to="/recarganequi" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }} onClick={() => setHeaderText(
          {
            titulo: "Deposita dinero en tu cuenta Nequi",
            texto: "En esta sección te enseñamos cómo puedes depositar dinero en tu cuenta fácilmente"
          }
        )}>
          ¿Cómo recargar Nequi?
        </Link>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <Link to="/relacionesconfianza" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}
          onClick={() => setHeaderText(
            {
              titulo: "Relaciones de confianza",
              texto: "En esta sección aprenderás a gestionar tus relaciones de confianza"
            }
          )}>
          Relaciones de confianza
        </Link>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <Link to="/pedirdinero" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}
          onClick={() => setHeaderText(
            {
              titulo: "Cómo Pedir Dinero en Nequi",
              texto: "En esta sección te enseñamos cómo pedir dinero fácilmente"
            }
          )}>
          Pedir dinero en Nequi
        </Link>
      </li>
      <li style={{ marginBottom: '0.5rem', padding: 0 }}>
        <Link to="/metas" className="text-primary" style={{ textDecoration: 'none', display: 'inline' }}
          onClick={() => setHeaderText(
            {
              titulo: "Metas",
              texto: "En esta sección te enseñamos cómo gestionar tus metas"
            }
          )}>
          Gestionar tus metas
        </Link>
      </li>
    </div>
  );
}

export default Inicio;
