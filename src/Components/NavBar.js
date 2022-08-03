import React from 'react'
import Nav from 'react-bootstrap/Nav';
import logo from './Images/TradExpress.svg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
    return (
        <div className='navBar'>
            <img src={logo} alt="" />
            <div className='bootNav'>
                <Navbar  expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className='top'>Instant Buy/Sell</Nav.Link>
                                <Nav.Link  href="#link" className='top'>Learn</Nav.Link>
                                <Nav.Link href="#link"><button className='navButton'>Log In</button></Nav.Link>
                                <Nav.Link href="#link"><button className='navButton1'>Get Started</button></Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </div>
    )
}

export default NavBar