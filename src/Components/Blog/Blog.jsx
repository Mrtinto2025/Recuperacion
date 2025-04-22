import React from 'react';
import Modal from 'react-bootstrap/Modal';

const Blog = () => {
    return (
        <div>           
            className="modal show"
      style={{ display: 'block', position: 'initial' }}
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido al Blog de la seriedad</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Estimado Usuario de la pagina de tratado de seriedad lamentamos informarle que esta apartado
            todavia se encuentra en su fase de desarrollo por lo cual debera tener pasciencia hasta que podamos 
            obtener el titulo y asi poder termiar gracias por su tiempo.
          </p>
        </Modal.Body>
      </Modal.Dialog>
        </div>
    );
}

export default Blog;
