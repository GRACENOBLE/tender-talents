"use client";

import React, { useState } from "react";
import HeroImage from "./HeroImage";
import HeroCarousel from "./HeroCarousel";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="w-screen mx-auto h-screen pb-1 max-h-[900px] relative isolate">

      <div className="absolute w-full h-full bg-black/60 -z-20 " />
      
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
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </section>
  );
}
