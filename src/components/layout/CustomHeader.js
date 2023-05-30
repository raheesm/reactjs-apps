import {images} from '../../contents';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react'


function CustomHeader() {
    const [navbg,setNavBg] = useState(false);


    const ChangeNavBg = () => {
      if(window.scrollY >= 50){
        setNavBg(true);
      }else{
        setNavBg(false)
      }
    }

    window.addEventListener('scroll',ChangeNavBg);
  return (
    <header className="sticky-lg-top">
        <Navbar  bg={navbg?'white':''} varient="light" expand="lg" fixed="top" className="pt-lg-4">
    <Container>
      <Navbar.Brand href="#home"><img src={images.logo} alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
        </Nav>
          <Link  to="/contact-us" className='btn btn-primary nav-btn rounded-pill' >Contact Us</Link>         
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </header>
  )
}

export default CustomHeader