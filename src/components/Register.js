import React , {useState} from "react";

import {Form, Button, Container} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

import firebaseApp from '../config/firebase'

export default function Register() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const createUser = (e) =>{
    e.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      addUserToDB()
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

  const handleNameChange = (e) =>{
    let value = e.target.value;
    setName(value);
  }

  const addUserToDB = () => {
    let userId = uuidv4();
    firebaseApp.database().ref('users/' + userId).set({
      name: name,
      email: email,
    }).then(() =>{
      console.log('inside database')
    })
    .catch(error => {
      console.log(error)
    });

  }

  return (
    <Container>
      <Form onSubmit={createUser}>
      
      <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" onChange={handleNameChange}/>
        </Form.Group>


        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
        </Form.Group>
    
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>

    </Container>
  );
}


/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.17.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.17.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
*/