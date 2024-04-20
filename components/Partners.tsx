import React from "react";
import Container from "./Container";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="bg-white py-8 md:py-16 ">
      <Container>
        <div className="flex flex-col gap-8 items-start">
          <div className="max-w-[460px]">
            <h1 className="text-3xl text-tt-red font-[500] py-4 ">
              Our Partners
            </h1>
            <p className="text-sm text-black max-w-[460px]">
              At Tender Talents Magnet School, we are grateful for the support
              and belief of those who have partnered with us. We have had the
              privilege of working with numerous credible organizations and
              schools, both locally and internationally.
            </p>
          </div>
          <div className=" h-[400px] w-full gap-4">
            <Image
              src={"/Images/home-images/partners.webp"}
              height={300}
              width={1000}
              alt={" at Tender Talents mahnet School Kasangati"}
              className="h-full w-full object-contain  "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
