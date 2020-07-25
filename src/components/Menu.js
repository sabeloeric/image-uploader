import React, { useState, useEffect } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

import firebaseApp from "../config/firebase";

export default function Menu() {
  const [user, setUser] = useState();

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  const handleSignOut = (e) =>{
    firebaseApp.auth().signOut().then(()=>{
        setUser(null)
    })
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <Image
          src={process.env.PUBLIC_URL + "/logo.png"}
          width={50}
          height={50}
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        {user ? (
          <>
            <Nav.Link href="/signin" onClick={handleSignOut}>Log Out</Nav.Link>
            <Nav.Link href="/uploud">Uploud Image</Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/register">Create Account</Nav.Link>
            <Nav.Link href="/signin">Login</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
}
