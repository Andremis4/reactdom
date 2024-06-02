import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-danger">
    <Container>
    <Link className='estiloDeTexto' to={"/"}>🏠 Home</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className="estiloDeTexto" to={"/about"}> 📒 Contacto</Link>
            </Nav>
        <Nav>
          <Link className='estiloDeTexto' to={"/"}>Happy Cake 🍰</Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}