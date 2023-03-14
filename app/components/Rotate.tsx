"use client"

import { useState, useEffect } from "react";

const images = [
  "section9-box1.png",
  "section9-box2.png",
  "section9-box3.png",
  "section9-box4.png",
];

export default function MyComponent() {
  const [images1, setImages1] = useState(images);
  const [images2, setImages2] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const lastImage = images1[images1.length - 1];
      const newImages1 = images1.slice(0, images1.length - 1);
      const newImages2 = [lastImage, ...images2];
      setImages1(newImages1);
      setImages2(newImages2);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images1, images2]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        {images1.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-48 h-48 object-cover rounded-full shadow-lg m-4"
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        {images2.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-48 h-48 object-cover rounded-full shadow-lg m-4"
          />
        ))}
      </div>
    </div>
  );
}
