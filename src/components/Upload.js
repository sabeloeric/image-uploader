import React, { useState } from "react";
import firebaseApp from "../config/firebase";
import { Form, Button, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function Upload() {
  const [imageAsFile, setImageAsFile] = useState();
  const [imageAsUrl, setImageAsUrl] = useState()
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    const storage = firebaseApp.storage();

    storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile)
      .then((snapShot) => {
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
        
            console.log(fireBaseUrl)
            setImageAsUrl(fireBaseUrl)
            
            addImageToDB(fireBaseUrl);

            
          });
      })
      .catch((error) => {});
  };

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
  };

  const handleTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleDesription = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const addImageToDB = (url) => {
    let imageId = uuidv4();

    firebaseApp
      .database()
      .ref("images/" + imageId)
      .set({
        imageAsUrl: url,
        title: title,
        description: description,
      })
      .then(() => {
        console.log("inside database");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleFireBaseUpload}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter the image title"
              onChange={handleTitle}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter the image description"
              onChange={handleDesription}
            />
          </Form.Group>

          <Form.File
            id="custom-file"
            label="Pick an image"
            custom
            onChange={handleImageAsFile}
          />

          <Form.Group>
            <Button variant="secondary" type="submit">
              Upload
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
