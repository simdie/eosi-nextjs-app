import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Bodyy() {
  const images = [
    {
      id: 1,
      src: "https://source.unsplash.com/random/800x400?sig=1",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://source.unsplash.com/random/800x400?sig=2",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://source.unsplash.com/random/800x400?sig=3",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://source.unsplash.com/random/800x400?sig=4",
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
    <div>

    </div>
  )
}
