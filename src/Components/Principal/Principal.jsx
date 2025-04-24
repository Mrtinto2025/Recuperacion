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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';








const Principal = () => {
  return (
    <div>
      <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
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

    <section className="hero-section">
  <div className="hero-container">
    <div className="hero-content">
      <Card className="hero-card">
        <Card.Body>
          <h1 className="hero-title">LANDING PAGE TEMPLATE</h1>
          <h2 className="hero-subtitle">LOREPSUM TITLE</h2>
          <div className="hero-divider"></div>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laureet dolore magna.
          </p>
          <button className="hero-button">NEXT</button>
        </Card.Body>
      </Card>
    </div>

    <div className="hero-image-container">
      <Card className="image-card">
        <img 
          src="https://via.placeholder.com/500x300" 
          alt="Placeholder"
          className="hero-image"
        />   
      </Card>
    </div>
  </div>
</section>
    
<section className="moai-cards-section">
  <div className="moai-container">
    <div className="moai-grid">
      
      <div className="moai-card">
        <img src={Muyserio} alt="Perspectiva Moai" className="moai-image" />
        <div className="moai-card-body">
          <h4 className="moai-card-title">perspectiva de los moais</h4>
          <p className="moai-card-text">
            Los moáis son un símbolo importante de la cultura Rapa Nui...
          </p>
        </div>
      </div>

      
      <div className="moai-card">
        <img src={Laseriedad} alt="Seriedad Moai" className="moai-image" />
        <div className="moai-card-body">
          <h4 className="moai-card-title">La seriedad del moai</h4>
          <p className="moai-card-text">
            La construcción y el transporte de los moáis...
          </p>
        </div>
      </div>

      
      <div className="moai-card">
        <img src={Soloserio} alt="Inicio Moai" className="moai-image" />
        <div className="moai-card-body">
          <h4 className="moai-card-title">Inicio de la seriedad</h4>
          <p className="moai-card-text">
            Los moáis fueron creados por los antiguos habitantes...
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="advantages-section">
  <div className="advantages-container">
    <h3 className="advantages-main-title">COMPANY ADVANTAGES</h3>
    
    <div className="advantages-grid">
      {/* Columna izquierda */}
      <div className="advantages-column">
        <div className="advantage-card">
          <h4 className="advantage-title primary">DOLOR FIT BOR</h4>
          <p className="advantage-description">YOUKDSIT, UT well ernen ad minimi utmaam, quis nostrud.</p>
        </div>
        
        <div className="advantage-card">
          <h4 className="advantage-title primary">BITUS GOROTUS</h4>
          <p className="advantage-description">Isnamed dolore magna aliquam erat volutpat. Ut</p>
        </div>
        
        <div className="advantage-card">
          <h4 className="advantage-title primary">GROBUR</h4>
          <p className="advantage-description">Volutpat, Ut i just enim ad minim veniam, quis nostrud.</p>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="advantages-column">
        <div className="advantage-card">
          <h4 className="advantage-title secondary">POSTURMAT</h4>
          <p className="advantage-description">euismod inrobust ut labore et dolore magna aliquam erat.</p>
        </div>
        
        <div className="advantage-card">
          <h4 className="advantage-title secondary">FIT BOR</h4>
          <p className="advantage-description">euismod inrobust ut labore et dolore magna aliquam erat.</p>
        </div>
        
        <div className="advantage-card">
          <h4 className="advantage-title secondary">NOGITS MOTPO</h4>
          <p className="advantage-description">euismod inrobust ut labore et dolore magna aliquam erat.</p>
        </div>
      </div>
    </div>

    {/* Barra inferior */}
    <div className="advantages-footer">
      <h4 className="footer-text">LOREIPSUM DOLOR TAURUS BIGOR</h4>
    </div>
  </div>
</section>   
  </div>
  );
}

export default Principal;



 
    










