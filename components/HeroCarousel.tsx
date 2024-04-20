"use client";

import Image from "next/image";

import { useEffect } from "react";

interface CarouselTypes {
  images: {
    image: string;
    desc: string;
    title: string;
 
  }[];
  currentImage:number;
  setCurrentImage: any;
}

const HeroCarousel = ({
  images,
  currentImage,
  setCurrentImage,
}: CarouselTypes) => {
  const imagesL = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % imagesL);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [currentImage]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-50">
      {images.map(({ image, caption }: any, index: number) => (
        <Image
          key={image}
          src={image}
          width={1000}
          height={900}
          alt={caption}
          className={`absolute top-0 left-0 inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HeroCarousel;
