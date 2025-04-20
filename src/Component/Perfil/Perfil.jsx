import React from 'react';
import './Perfil.css';

function Perfil() {
  return (
    <div className="perfil-container">
      <h2>Perfil de Usuario</h2>
      <div className="perfil-info">
        <p><strong>Nombre:</strong> Usuario Ejemplo</p>
        <p><strong>Correo Electrónico:</strong> ejemplo@correo.com</p>
        <p>Bienvenido a tu área personal. Aquí podrás ver y modificar tu información.</p>
      </div>
    </div>
  );
}

export default Perfil;