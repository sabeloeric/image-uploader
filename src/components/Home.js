import React, { useState, useEffect } from "react";
import firebaseApp from "../config/firebase";
import ImageViewList from "./ImageViewList";
import Search from "./Search";

export default function Home() {
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

  const searchDB = (query) => {
    const searchedImagesRef = firebaseApp
      .database()
      .ref()
      .child("images")
      .orderByChild("title")
      .equalTo(query);

    searchedImagesRef.once("value", (snapshot) => {
      const array = [];
      snapshot.forEach((image) => {
        array.push(image.val());
      });
      setImages(array);
    });
  };

  return (
    <div>
      <Search searchDB={searchDB} />
      <ImageViewList images={images} />
    </div>
  );
}
