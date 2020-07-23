import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'

export default function Menu() {
    
    const [isLogedIn, setIsLogedIn] = useState(false);
    
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/register">Create Account</Nav.Link>
                <Nav.Link href="/signin">Login</Nav.Link>
                <Nav.Link href="/signout">Log Out</Nav.Link>
            </Nav>
        </Navbar>
 /*       <div>

            <Link to="/">Home </Link>
            <Link to="/register">Create Account</Link>
            <Link to="/signin">Login</Link>
        </div>
}*/
    )
}
