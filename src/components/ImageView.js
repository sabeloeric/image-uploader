import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";

import firebaseApp from '../config/firebase'

export default function ImageView({ image }) {
  const [userEmail, setUserEmail] = useState();

  const handleDelete = (e) =>{
    e.preventDefault();
    firebaseApp.database().ref('images/' + image.imageId).remove().then(()=>{
      alert('Deleted, refresh')
    }).catch(error=>{
      alert(error)
    })
  }


  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log(user.email)
      setUserEmail(user.email);
    });
  });

  return (
    <div>
      <Container>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={image.imageAsUrl} />
          <Card.Body>
            <Card.Title>{image.title}</Card.Title>
            <Card.Text>{image.desctription}</Card.Text>
            {userEmail === image.userEmail ? (
              <Button variant="primary" onClick={handleDelete}>Delete</Button>
            ) : (
              ""
            )}
       
            
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
