import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function ImageView() {
  return (
    <div>
      <Container>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
