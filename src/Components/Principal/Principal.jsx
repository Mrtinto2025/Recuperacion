import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Laseriedad from '../Imagenes/Laseriedad.jpg'
import Muyserio from '../Imagenes/Muyserio.jpg'
import Soloserio from '../Imagenes/Soloserio.jpg'
import './Principal.css';
import Image from 'react-bootstrap/Image';
import Corvett from '../Imagenes/Corvett.jpg'




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
     <p> </p>
    <div className="Imagen-derecha">
    <Image src={Corvett} fluid />
    </div>

    <Card.Text>
    La economía, en su esencia más pura, es el arte de gestionar recursos 
    escasos en un mundo de infinitas necesidades. En un delicado equilibrio, 
    los mercados danzan entre la oferta y la demanda, 
    reflejando las aspiraciones y temores de la humanidad. La inversión, 
    cual semilla en tierra fértil, germina en oportunidades de crecimiento y prosperidad. 
    Sin embargo, la volatilidad de los ciclos económicos nos recuerda la fragilidad de este tejido interconectado.
    </Card.Text>
    
    <Button variant="outline-info">Info</Button>

    <div className='card-container'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Laseriedad} />
      <Card.Body>
        <Card.Title>Inicio de la seriedad</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Soloserio} />
      <Card.Body>
        <Card.Title>La seriedad del moai</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Muyserio}  />
      <Card.Body>
        <Card.Title>perspectiva de los moais</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>


    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>

    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>



    </div>
  );
}

export default Principal;



 
    










