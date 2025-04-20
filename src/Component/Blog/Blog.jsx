import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1>Bienvenido al club</h1>
            </div>
            <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
            </Modal.Footer>    
        </div>
    );
}

export default Blog;
