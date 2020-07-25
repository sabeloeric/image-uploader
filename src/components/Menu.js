import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

export default function Menu() {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/register">Create Account</Nav.Link>
                <Nav.Link href="/signin">Login</Nav.Link>
                <Nav.Link href="/signout">Log Out</Nav.Link>
                <Nav.Link href="/uploud">Uploud Image</Nav.Link>
            </Nav>
        </Navbar>

    )
}
