import React, {useState, useEffect} from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function ImageView({image}) {

  return (
    <div>
      <Container>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={image.imageAsUrl} />
          <Card.Body>
            <Card.Title>{image.title}</Card.Title>
            <Card.Text>
              {image.desctription}
            </Card.Text>
            <Button variant="primary">Delete</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
