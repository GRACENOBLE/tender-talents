"use client" 

import React, { useState } from "react";
import HeroImage from "./HeroImage";
import HeroCarousel from "./HeroCarousel";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  const heroImages = [
    {
      image: "/images/hero-images/group.webp",
      title: "col-span-2 row-span-2  ",
      desc: "note to self each of these images will have to be replaced with hosted images so as to improve SEOnote to self each of these images will have to be replaced with hosted images so as to improve SEO",
    },
    {
      image: "/images/hero-images/discussion.webp",
      title: "col-span-1",
      desc: "note to self each of these images will have to be replaced with hosted images so as to improve SEOnote to self each of these images will have to be replaced with hosted images so as to improve SEO",
    },
    {
      image: "/images/hero-images/potOnHead.webp",
      title: "col-span-1 ",
      desc: "note to self each of these images will have to be replaced with hosted images so as to improve SEOnote to self each of these images will have to be replaced with hosted images so as to improve SEO",
    },
    {
      image: "/images/hero-images/studentsWalking.webp",
      title: "col-span-2 row-span-2 ",
      desc: "note to self each of these images will have to be replaced with hosted images so as to improve SEOnote to self each of these images will have to be replaced with hosted images so as to improve SEO",
    },
    {
      image: "/images/hero-images/computer_lab.webp",
      title: "row-span-2 col-span-2 ",
      desc: "note to self each of these images will have to be replaced with hosted images so as to improve SEOnote to self each of these images will have to be replaced with hosted images so as to improve SEO",
    },
    {
      image: "/images/hero-images/theatre3.webp",
      title: "col-span-2 row-span-2 ",
      desc: "note to self each of these images will have to be replaced with hosted images so as to improve SEOnote to self each of these images will have to be replaced with hosted images so as to improve SEO",
    },
    {
      image: "/images/hero-images/band.webp",
      title: "col-span-1 ",
      desc: "note to self each of these images will have to be replaced with hosted images so as to improve SEOnote to self each of these images will have to be replaced with hosted images so as to improve SEO",
    },
    {
      image: "/images/hero-images/dance2.webp",
      title: "col-span-1 ",
      desc: "note to self each of these images will have to be replaced with hosted images so as to improve SEOnote to self each of these images will have to be replaced with hosted images so as to improve SEO",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="w-screen mx-auto h-screen pb-1 max-h-[900px] relative isolate">
      <div className="absolute w-full h-full bg-black/60 -z-20 backdrop-blur-[2px]" />

      <Container>
        <div className="h-screen max-h-[900px] flex items-center">
          <div className="h-full w-full flex flex-col justify-center gap-4  md:max-w-[520px]">
            <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight tracking-tight">
              In Our Hands Lies the Future
            </h1>
            <h2 className="text-lg h-[64px] text-white/80">
              Welcome to Tender Talents Magnet School, where academic excellence
              meets creative expression. 
            </h2>

            <div className="mt-12 pt-8 flex flex-col items-center md:flex-row gap-4 md:gap-8 w-full">
              <Link href={"/contact-us"} className="w-full">
                <Button className="text-black w-full md:w-fit font-medium">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <HeroCarousel
        images={heroImages}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </section>
  );
}

//  <section className="bg-tt-cream ">
//    <div className="w-screen max-w-[1920px] mx-auto roun grid grid-cols-6 grid-rows-4  h-screen pb-1 max-h-[900px]">
//      {heroImages
//        .filter(({ image, position }: any, _i) => _i < 4)
//        .map(({ image, position }) => (
//          <HeroImage image={image} grid_position={position} />
//        ))}

//      <div className="col-span-2 row-span-2 bg-white grid place-items-center shadow-lg rounded-2xl  p-4">
//        <h1 className="text-tt-red text-2xl">
//          <div>
//            {/*note to self each of these images will have to be replaced with hosted images so as to improve SEO */}
//            <Image
//              src="/Images/logo.svg"
//              alt=""
//              width={150}
//              height={150}
//              className="mx-auto pb-6"
//            />
//            <h1 className="text-xl font-bold">IN OUR HANDS LIES THE FUTURE</h1>
//          </div>
//        </h1>
//      </div>

//      {heroImages
//        .filter(({ image, position }: any, _i) => _i >= 4)
//        .map(({ image, position }) => (
//          <HeroImage image={image} grid_position={position} />
//        ))}
//    </div>
//  </section>;
