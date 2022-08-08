import React from 'react'
import Nav from 'react-bootstrap/Nav';
import logo from './Images/TradExpress.svg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className='navBar'>
            <Link to='./'><img src={logo} alt="" /></Link> 
            <div className='bootNav'>
                <Navbar expand="lg" className=''>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto ">
                                <Link to='/instant-buy'> <Nav.Link href="#home" className='top'>Instant Buy/Sell</Nav.Link></Link>
                                <Nav.Link  href="#link" className='top'>Learn</Nav.Link>
                                <Link to='./login'><Nav.Link href="#link"><button className='navButton'>Log In</button></Nav.Link></Link>
                                <Link to='/Sign-Up'><Nav.Link href="#link"><button className='navButton1'>Get Started</button></Nav.Link></Link> 
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </div>
    )
}

export default NavBar