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
      <header>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Solo Seriedad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/">Principal</Nav.Link>
            <Nav.Link href="/Usuario">Usuario</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Registro">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>

    <section>    
    <Card>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    </Card>

    <div>  
    <Button variant="Blog">Blog</Button>
    </div> 
    
    <article>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />   
      </Card>
    </article>
    

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
    </section>

  <section>

  </section>
  </div>
  );
}

export default Principal;



 
    










