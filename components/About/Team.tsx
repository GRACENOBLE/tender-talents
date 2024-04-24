"use client"

import React from "react";
import Container from "../Container";
import Image from "next/image";


const StaffImages = [
  {
    image: "/images/home-images/about-home.webp",
    caption: "Caption",
  },
  {
    image: "/images/home-images/about-home.webp",
    caption: "Caption",
  },
  {
    image: "/images/home-images/about-home.webp",
    caption: "Caption",
  },
  {
    image: "/images/home-images/about-home.webp",
    caption: "Caption",
  },
  {
    image: "/images/home-images/about-home.webp",
    caption: "Caption",
  },
  {
    image: "/images/home-images/about-home.webp",
    caption: "Caption",
  },
  {
    image: "/images/home-images/about-home.webp",
    caption: "Caption",
  },
  {
    image: "/images/home-images/about-home.webp",
    caption: "Caption",
  },
];

export default function Team() {
  return (
    <section className=" bg-tt-cream/40 py-10">
      <Container>
        <div>
          <h2 className="text-4xl text-tt-red font-bold">Meet the staff</h2>
          <br />
          <p className="max-w-[700px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa corrupti inventore quasi tempora harum quis doloribus laborum earum distinctio nostrum illum eum aspernatur molestias voluptas, et suscipit debitis perspiciatis deserunt atque perferendis voluptatem laudantium unde fugit! </p>
        </div>
        <br />
        <div className="h-full grid grid-cols-4 gap-6 items-center justify-center">
          {StaffImages.map(({ image, caption }) => (
            <div>
              <Image
                src={image}
                alt=""
                height={1000}
                width={1000}
                className="rounded-md"
              />
              <p>{caption}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
