import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/home">Home</Link>
            <Link className='nav-link' to="/about">About</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;