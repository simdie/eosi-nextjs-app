'use client';

import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  {
    id: 1,
    src: "section9-box1.png",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "section9-box2.png",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "section9-box3.png",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "section9-box4.png",
    alt: "Image 4",
  },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) =>
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImage((currentImage) =>
      currentImage === 0 ? images.length - 1 : currentImage - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((currentImage) =>
      currentImage === images.length - 1 ? 0 : currentImage + 1
    );
  };

  return (
    
      
      <div className="relative h-36">
        {images.map ((image, index) => (
            <Image src={image.src} alt={image.alt} key={image.id} className={` absolute inset-0 w-1/6 h-full transition-opacity ${currentImage === index ? "opacity-100" : "opacity-0"}`} />
        ))}
          
      </div>
     
  

   
  );
};

export default Slider;
