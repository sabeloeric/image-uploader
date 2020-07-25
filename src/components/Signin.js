import React , {useState} from "react";

import {Form, Button, Container} from 'react-bootstrap'

import firebaseApp from '../config/firebase'

export default function Signin() {


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = (e) =>{
    e.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
     
      console.log('done')
    })
    .catch(error => {
      console.log(error)
    });
  }

  const handleEmailChange = (e) =>{
    let value = e.target.value;
    setEmail(value);
  }

  const handlePasswordChange = (e) =>{
    let value = e.target.value;
    setPassword(value);
  }

  return (
    <div>
      <Container>
        <Form onSubmit={loginUser}>


          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}
