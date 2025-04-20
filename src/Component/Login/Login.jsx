import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;