import React from 'react';
import './Registro.css';

function Registro() {
  return (
    <div className="registro-container">
      <h2>Registrarse</h2>
      <form className="registro-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn-secondary">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;