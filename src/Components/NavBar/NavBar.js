import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'


function NavBar() {
    return (
        <>
            <Container >
                <Navbar.Brand href="#home">Netflex Clone</Navbar.Brand>
                <Nav className="me-auto"></Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/FavList'>Favourite</Nav.Link>
            </Nav>
        </Container >
        </Navbar >
        </>
    )
}

export default NavBar;


<Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
         
        </Container >
      </Navbar >