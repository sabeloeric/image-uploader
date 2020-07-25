import React from "react";

import ImageView from "./ImageView";

export default function ImageViewList({ images }) {
  let content = <p>loading...</p>;
  if (images) {
    if (images.length === 0) {
      content = <p>No images found</p>;
    } else {
      content = (
        <div>
          {images.map((image) => {
            return <ImageView image={image} key={image.imageId} />;
          })}
        </div>
      );
    }
  }

  return <div>{content}</div>;
}
