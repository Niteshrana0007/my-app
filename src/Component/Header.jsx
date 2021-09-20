import React  from "react";
import "../css/navbar.css";
import {Navbar , Container , Nav ,Button } from "react-bootstrap"
function Header() {

    return (
    <Navbar collapseOnSelect expand="lg" className = "navbar-Header  " variant="dark">
        <Container>
            <Navbar.Brand href="#home">bre.ad/jane</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav  >
                    <Nav.Link id ="navlinks" href="#Offerings">Offerings</Nav.Link>
                    <Nav.Link id ="navlinks" href="#Other Links">Other Links</Nav.Link>
                    <Nav.Link id ="navlinks" href="#Testimonials">Testimonials</Nav.Link>
                    <Nav.Link id ="navlinks" href="#Portfolio">Portfolio</Nav.Link>
                    <Nav.Link id ="navlinks" href="#Contact me">Contact me</Nav.Link>                    
                    <Button id="book-trial-btn">Book Trial</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
  }
export default Header;