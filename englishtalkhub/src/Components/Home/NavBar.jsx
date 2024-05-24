import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" bg="white" className="body-tertiary">
        <Container>
          <Link to="/">
            <img
              alt="logo"
              src="https://firebasestorage.googleapis.com/v0/b/english-talk-hub.appspot.com/o/assets%2Flogonegro.png?alt=media&token=e1d6c5ea-7423-45ef-b381-a29bb5cc1815"
              width="auto"
              height="60"
              className="d-inline-block align-top"
            />{' '}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/cursos">Cursos</Nav.Link>
              <Nav.Link href="inmersiones">Calendario de inmersiones</Nav.Link>
              <Nav.Link href="historia">ETH: Un emprendimiento</Nav.Link>
              <Nav.Link className="NavBar_soyEstudiante" href="estudiantes">
                Soy estudiante
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
