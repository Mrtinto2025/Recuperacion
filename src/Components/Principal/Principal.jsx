import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Laseriedad from '../Imagenes/Laseriedad.jpg'
import Muyserio from '../Imagenes/Muyserio.jpg'
import Soloserio from '../Imagenes/Soloserio.jpg'
import './Principal.css';






const Principal = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Solo Seriedad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Principal</Nav.Link>
            <Nav.Link href="/Usuario">Usuario</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Registro">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
     <h2>El tratado de seriedad</h2>
     <p>
    La economía, en su esencia más pura, es el arte de gestionar recursos 
    escasos en un mundo de infinitas necesidades. En un delicado equilibrio, 
    los mercados danzan entre la oferta y la demanda, 
    reflejando las aspiraciones y temores de la humanidad. La inversión, 
    cual semilla en tierra fértil, germina en oportunidades de crecimiento y prosperidad. 
    Sin embargo, la volatilidad de los ciclos económicos, 
    nos recuerda la fragilidad de este tejido interconectado. 
    </p>
  
    <Button variant="Blog">Blog</Button>
    



    <div className='card-container'>
    <Card >
      <Card.Img variant="top" src={Laseriedad} />
      <Card.Body>
        <Card.Title>Inicio de la seriedad</Card.Title>
        <Card.Text>
        Los moáis fueron creados por los antiguos habitantes de la Isla de Pascua, 
        conocidos como los Rapa Nui, entre los siglos XIII y XV.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card >
      <Card.Img variant="top" src={Soloserio} />
      <Card.Body>
        <Card.Title>La seriedad del moai</Card.Title>
        <Card.Text>
        La construcción y el transporte de los moáis son un misterio que ha fascinado,
        a los historiadores y arqueólogos durante siglos.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={Muyserio}  />
      <Card.Body>
        <Card.Title>perspectiva de los moais</Card.Title>
        <Card.Text>
        Los moáis son un símbolo importante de la cultura Rapa Nui,
        y un legado de la historia de la Isla de Pascua. 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </div>
  );
}

export default Principal;



 
    










