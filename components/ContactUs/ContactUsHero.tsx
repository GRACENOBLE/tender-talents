import React from "react";
import Container from "../Container";
import Image from "next/image";

export default function ContactUsHero() {
  return (
    <section className=" bg-tt-cream/40 pt-20 pb-10 h-[800px]">
      <Container>
        <div className=" flex items-center">
          <div className="w-full h-[500px] flex">
            <div className="w-full ps-10 h-[500px] bg-tt-red rounded-lg  mt-10 me-20 flex pe-10 ">
              <div className="max-w-96 pt-14">
                <h1 className="text-4xl text-white font-bold">Contact Us</h1>
                <br />
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  ullam maiores suscipit amet ab, explicabo vitae! Excepturi
                  pariatur, non, ad ullam fugit vel nam harum eius repellendus
                  animi perspiciatis aperiam! Ea minus ab suscipit consectetur
                  soluta assumenda iure sunt at delectus ut! Fugiat a ducimus
                  temporibus vel totam rem quam!
                </p>
              </div>
            </div>
          </div>

          <div className="absolute h-[600px] w-full max-w-[1220px] z-40 mt-72 flex justify-end">
            <div className="h-full object-cover w-[700px] rounded-lg border bg-tt-cream flex justify-center items-center">
                Form
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
