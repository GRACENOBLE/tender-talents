import React from "react";
import Container from "../Container";
import Image from "next/image";

export default function Map() {
  return (
    <section className="bg-tt-cream h-full pt-20 pb-32">
      <Container>
        <div className="w-full h-full bg-white rounded-lg overflow-hidden">
         <Image src= "/images/Map.png" alt="" width={10000} height={10000} className="object-cover"/>
        </div>
      </Container>
    </section>
  );
}
