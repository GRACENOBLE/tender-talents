import React from "react";
import Container from "../Container";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className=" bg-tt-cream/40 pt-20 pb-10">
      <Container>
        <div className=" flex items-center">
          <div className="w-full h-[500px] flex justify-end">
            <div className="w-full ps-10 h-[350px] bg-tt-red rounded-lg ms-20 mt-10 flex justify-end pe-10 ">
              <div className="max-w-96 flex flex-col justify-center">
                <h1 className="text-4xl text-white font-bold">About Us</h1>
                <br />
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam maiores suscipit amet ab, explicabo vitae! Excepturi pariatur, non, ad ullam fugit vel nam harum eius repellendus animi perspiciatis aperiam! Ea minus ab suscipit consectetur soluta assumenda iure sunt at delectus ut! Fugiat a ducimus temporibus vel totam rem quam!</p>
              </div>
            </div>
          </div>

          <div className="absolute h-96 w-[700px] rounded-lg z-40 overflow-hidden mt-20">
            <Image
              src="/images/photo_2.webp"
              alt=""
              width={1000}
              height={1000}
              className="h-full w-full object-cover "
            ></Image>
          </div>
        </div>
      </Container>
    </section>
  );
}
