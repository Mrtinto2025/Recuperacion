import React from 'react';
import './Usuario.css'
import Modal from 'react-bootstrap/Modal';


const Usuario = () => {
    return (
        <div>
                  className="modal show"
                  style={{ display: 'block', position: 'initial' }}
    
    <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido Usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Lamentamos profundamente decirte que esta pagina todavia se encuentra en desarrollo
            y no se encuentra disponible para su uso. Te pedimos disculpas por los inconvenientes que esto pueda causar y te agradecemos por tu comprension.
          </p>
        </Modal.Body>
    </Modal.Dialog>

        </div>
    );
}

export default Usuario;
