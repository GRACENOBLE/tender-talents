import Image from "next/image";
import React from "react";

type HeroImageProps = {
  image: string;
  grid_position: string;
  blurUrl: string
};

export default function HeroImage({ image, grid_position,blurUrl }: HeroImageProps) {
  return (
    <div
      className={`${grid_position} relative isolate h-full before:w-full before:h-full before:bg-black/50 before:absolute`}
    >
      <Image
        src={image}
        alt="Tender Talents Magnet School activities photo"
        height={600}
        width={600}
        className="object-cover w-full h-full object-center"
        blurDataURL={blurUrl}
      />
    </div>
  );
}
