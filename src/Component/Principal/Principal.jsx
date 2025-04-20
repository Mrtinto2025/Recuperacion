import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import React from 'react';

const Principal = () => {
  return (
  <>
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Remontada</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    <div className='titulo'>
      <h2>Trateme serio</h2>
    </div>

    <Card style={{ width: '18rem' }}>      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        En la penumbra de la noche, las estrellas susurran secretos al viento, mientras la luna, 
        cual amante distante, ilumina con su suave resplandor los caminos del alma.
        </Card.Text>
        <Button variant="primary">Next</Button>
      </Card.Body>
    </Card>

    
    </>

  );
}

export default Principal;


 
    










