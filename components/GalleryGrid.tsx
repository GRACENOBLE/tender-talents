"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "./Container";
import GalleryCard from "./GalleryCard";

type GalleryProps = {
  photo_collection: {
    image: number;
    caption: string;
  }[];
};

const GalleryGrid = ({ photo_collection }: GalleryProps) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="bg-tt-cream pt-16 pb-32 border">
      <Container>
        <div className="flex flex-col gap-20 items-start">
          <div className="max-w-[460px]">
            <h1 className="text-3xl text-tt-red font-[500] py-4 ">
              Campus Gallery
            </h1>
            <p className="text-sm text-black max-w-[460px]">
              At Tender Talents Magnet School, we are grateful for the support
              and belief of those who have partnered with us. We have had the
              privilege of working with numerous credible organizations and
              schools, both locally and internationally.
            </p>
          </div>
          <div className="">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="h-[360px]">
                {photo_collection.map(({ image, caption }, index) => (
                  <CarouselItem
                    key={image}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <GalleryCard image={image} id={index} caption={caption} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="" />
              <CarouselNext className="" />
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GalleryGrid;
