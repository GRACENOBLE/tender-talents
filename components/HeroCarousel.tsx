"use client";

import Image from "next/image";

import { useEffect } from "react";

interface CarouselTypes {
  currentImage: number;
  setCurrentImage: any;
}

const heroImages = [
  {
    image: 1,
  },
  {
    image: 2,
  },
  {
    image: 3,
  },
  {
    image: 4,
  },
  {
    image: 5,
  },
  {
    image: 6,
  },
  {
    image: 7,
  },
  {
    image: 8,
  },
];

const HeroCarousel = ({
  currentImage,
  setCurrentImage,
}: CarouselTypes) => {
  const imagesL = heroImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % imagesL);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [currentImage]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-50">
      {heroImages.map(({ image}: any, index: number) => (
        <Image
          key={image}
          src={`/images/hero-images/photo_${image}.webp`}
          width={1000}
          height={900}
          alt=""
          className={`absolute top-0 object-top left-0 inset-0 w-full h-full object-cover  transition-opacity duration-1000 ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HeroCarousel;
