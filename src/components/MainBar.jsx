// components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Mainbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-mainbar">
      <div className="container-mainbar">
        <NavLink to="/" className="navbar-brand">
          <img src={"https://cdn.prod.website-files.com/6317a229ebf7723658463b4b/663a6b0d43303ddf38035997_logo-nequi.svg"} alt="Descripción de la imagen" />
        </NavLink>        
        <h1 className='h1-mainbar'>Manual de Usuario Nequi</h1>
      </div>
    </nav>
  );
}

export default Mainbar;
