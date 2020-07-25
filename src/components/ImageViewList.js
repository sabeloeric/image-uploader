import React, { useState, useEffect, Component } from "react";
import firebaseApp from "../config/firebase";
import ImageView from "./ImageView";

export default function ImageViewList() {
  const [images, setImages] = useState();

  useEffect(() => {
    const imagesRef = firebaseApp.database().ref().child("images").orderByKey();
    imagesRef.once("value", (snapshot) => {
      const array = [];
      snapshot.forEach((image) => {
        array.push(image.val());
      });
      setImages(array);
    });
  }, []);

  let content = <p>loading...</p>;
  if (images) {
    content = (
      <div >
        {images.map((image) => {
          return <ImageView image={image} key={image.imageId}  />;
        })}
      </div>
    );
  }
  return <div>{content}</div>;
}
