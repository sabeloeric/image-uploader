import React, { useState, useEffect } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import firebaseApp from "../config/firebase";

export default function Search({searchDB }) {

    const [query, setQuery] = useState();

    const handleQueryOnChange=(e)=>{
        const value = e.target.value;
        setQuery(value);
      }


    const handleSearchSubmit = (e) =>{
        e.preventDefault();  
        searchDB(query)

      }


  return (
    <div>
      <Form onSubmit={handleSearchSubmit}>
        <Container>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Control
                placeholder="Search title"
                onChange={handleQueryOnChange}
              ></Form.Control>
            </Col>
            <Col>
              <Button type="submit" >Search</Button>
            </Col>
          </Form.Row>
        </Container>
      </Form>
    </div>
  );
}
